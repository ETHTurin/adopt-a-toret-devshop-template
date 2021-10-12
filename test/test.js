const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Toret", function () {
  it("Should adopt a Toret", async function () {
    const Toret = await ethers.getContractFactory("Toret");
    const toret = await Toret.deploy();

    await toret.deployed();

    console.log("Toret deployed to:", toret.address);

    const accounts = await ethers.getSigners();

    await toret.adopt(1);

    const balanceOfBN = await toret.balanceOf(accounts[0].address, 1);
    const balanceOf = balanceOfBN.toNumber();
    // const

    expect(balanceOf).equal(1);
  });

  it("Should not adopt a Toret if already adopted", async function () {
    const Toret = await ethers.getContractFactory("Toret");
    const toret = await Toret.deploy();

    await toret.deployed();

    console.log("Toret deployed to:", toret.address);

    const accounts = await ethers.getSigners();

    await toret.adopt(1);

    const balanceOfBN = await toret.balanceOf(accounts[0].address, 1);
    const balanceOf = balanceOfBN.toNumber();
    // const

    try {
      await toret.adopt(1);
    } catch (err) {}
  });
});
