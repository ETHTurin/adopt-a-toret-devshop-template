// contracts/Toret.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Toret is ERC1155 {
    // Definire qui il mapping che dica, dato un certo toretId, l'eventuale adopter

    // Definire qui il vettore di struct che contengono gli indirizzi e gli address adottati
    // es: XYZ[] adopters;

    // definire qui una struct che contenga l'indirizzo e l'id del toret adottato
    // es.: struct XYZ {
    //  ??? toretId;
    //  ??? adopter;    
    //}

    // Definire qui l'evento loggato dalla funzione adopt con i due parametri dell'indirizzo
    // dell'adopter e l'id del toret adottato

    constructor() ERC1155("https://toret-api.vercel.app/api/{id}") {}

    // Questa funzione prende in input l'id del toret da adottare e minta 
    // un NFT da inviare al chiamante della funzione
    // dopodiché emettere un evento che logga l'indirizzo del proprietario e l'id
    // del toret adottato.

    // CHECK NECESSARI: il toret non deve essere già stato adottato
    function adopt(uint16 _toretId) public {}

    // Questa funzione restituisce un vettore con l'elenco degli adopter e del loro relativo toret
    function getAdopters() public view {}
}