import Image from "next/image";
import { ethers } from "ethers";

import ToretContractArtifact from "artifacts/contracts/Toret.sol/Toret.json";
import { useEffect, useState } from "react";

const adoptionStatuses = {
  FREE: 0,
  ADOPTED: 1,
  OWNER: 2,
};

function Index(props) {
  const [torets, setTorets] = useState([]);

  async function adoptToret(toretId) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const toretContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_TORET_CONTRACT_ADDRESS,
        ToretContractArtifact.abi,
        signer
      );

      const adoptToretTx = await toretContract.adopt(toretId);

      const adoptToretTxReceipt = await adoptToretTx.wait();

      if (adoptToretTxReceipt) {
        setTorets((torets) =>
          torets.map((toret) => {
            if (toret.id === toretId)
              return { ...toret, adoptionStatus: adoptionStatuses.OWNER };

            return toret;
          })
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function getAdoptedTorets() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const toretContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_TORET_CONTRACT_ADDRESS,
        ToretContractArtifact.abi,
        signer
      );

      const signerAddress = await signer.getAddress();

      const adopters = await toretContract.getAdopters();

      const _torets = props.torets.map((toret) => {
        let adoptionStatus = adoptionStatuses.FREE;
        let [isAdopted] = adopters.filter(({ toretId }) => toretId == toret.id);

        if (isAdopted) {
          adoptionStatus =
            isAdopted.adopter === signerAddress
              ? adoptionStatuses.OWNER
              : adoptionStatuses.ADOPTED;
        }

        return { ...toret, adoptionStatus };
      });

      setTorets(_torets);
    }

    getAdoptedTorets();
  }, []);

  function getAdoptButton(adoptionStatus, toretId) {
    console.log(adoptionStatus);

    const toAdoptButton = (
      <button
        type="button"
        className="bg-purple-900 text-white p-2 rounded-lg"
        onClick={() => adoptToret(toretId)}
      >
        Adotta!
      </button>
    );

    const adoptedButton = (
      <button
        type="button"
        className="bg-purple-900 opacity-50 text-white p-2 rounded-lg cursor-not-allowed"
      >
        Già adottato!
      </button>
    );

    const ownerButton = (
      <button
        type="button"
        className="bg-green-900 cursor-not-allowed text-white p-2 rounded-lg"
      >
        Questo toret è tuo!
      </button>
    );

    if (adoptionStatus === adoptionStatuses.FREE) return toAdoptButton;
    if (adoptionStatus === adoptionStatuses.ADOPTED) return adoptedButton;

    return ownerButton;
  }

  return (
    <div className="font-sans bg-gray-200 p-8 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-center text-6xl font-bold mb-8">
          Adotta un toret!
        </h1>
        <div className="grid grid-cols-6 gap-4">
          {torets.map((toret, i) => {
            return (
              <div
                key={i}
                className="shadow-md rounded-lg p-4 flex flex-col justify-between space-y-4 bg-gray-100"
              >
                <div>
                  <Image
                    width="246"
                    height="364"
                    src={
                      toret.image !== ""
                        ? toret.image
                        : "https://ilovetoret.it/ima/default_toret.jpg"
                    }
                    className="rounded-lg"
                  />

                  <p className="font-bold">{toret.name}</p>
                  <p className="text-gray-600">{toret.description}</p>
                </div>
                {getAdoptButton(toret.adoptionStatus, toret.id)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let torets = await (
    await fetch(`http://${context.req.headers.host}/api/torets`)
  ).json();

  torets = Object.entries(torets).map(([id, rest]) => {
    return { id, ...rest };
  });

  return {
    props: { torets },
  };
}

export default Index;
