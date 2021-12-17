import { Injectable } from '@angular/core';
import Web3 from "web3";
declare const window: any;
const Address ="0x40E4553C8Ee8e6faBdb61743324D0F64eeeC37c4";
const abi = [  {
    "inputs": [],
    "name": "counter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "his",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "owner",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "nombre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "desc",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "fec_cr",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_nom",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_owner",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_fec",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_add",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_hashs",
        "type": "uint256[]"
      }
    ],
    "name": "savHis",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  window:any;
  constructor() { }
  private getAccounts = async () => {
      try {
          return await window.ethereum.request({ method: 'eth_accounts' });
      } catch (e) {
          return [];
      }
  }

  public openMetamask = async () => {
      window.web3 = new Web3(window.ethereum);
      let addresses = await this.getAccounts();
      console.log("service",addresses)
      if (!addresses.length) {
          try {
              addresses = await window.ethereum.enable();
          } catch (e) {
              return false;
          }
      }
      return addresses.length ? addresses[0] : null;
  };
}
