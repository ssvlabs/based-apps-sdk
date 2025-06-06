// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface MockWhitelistingContract$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "MockWhitelistingContract",
  "sourceName": "contracts/test/mocks/MockWhitelistingContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "whitelistedAddresses",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "isWhitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "setWhitelistedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561000f575f80fd5b5060405161041c38038061041c83398101604081905261002e916100be565b5f5b81518110156100885760015f8084848151811061004f5761004f61017d565b6020908102919091018101516001600160a01b031682528101919091526040015f20805460ff1916911515919091179055600101610030565b5050610191565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b03811681146100b9575f80fd5b919050565b5f60208083850312156100cf575f80fd5b82516001600160401b03808211156100e5575f80fd5b818501915085601f8301126100f8575f80fd5b81518181111561010a5761010a61008f565b8060051b604051601f19603f8301168101818110858211171561012f5761012f61008f565b60405291825284820192508381018501918883111561014c575f80fd5b938501935b8285101561017157610162856100a3565b84529385019392850192610151565b98975050505050505050565b634e487b7160e01b5f52603260045260245ffd5b61027e8061019e5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806301ffc9a714610043578063830639ac1461006a578063f096b0ff146100a3575b5f80fd5b610056610051366004610199565b610101565b604051901515815260200160405180910390f35b610056610078366004610207565b5073ffffffffffffffffffffffffffffffffffffffff165f9081526020819052604090205460ff1690565b6100ff6100b136600461022f565b73ffffffffffffffffffffffffffffffffffffffff165f90815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b005b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f830639ac00000000000000000000000000000000000000000000000000000000148061019357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b5f602082840312156101a9575f80fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101d8575f80fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610202575f80fd5b919050565b5f8060408385031215610218575f80fd5b610221836101df565b946020939093013593505050565b5f6020828403121561023f575f80fd5b6101d8826101df56fea2646970667358221220aac2d315e255d9228a50184c193741624d8abf06d04bdcf06d92a9b49c3a3f9864736f6c63430008180033",
  "deployedBytecode": "0x608060405234801561000f575f80fd5b506004361061003f575f3560e01c806301ffc9a714610043578063830639ac1461006a578063f096b0ff146100a3575b5f80fd5b610056610051366004610199565b610101565b604051901515815260200160405180910390f35b610056610078366004610207565b5073ffffffffffffffffffffffffffffffffffffffff165f9081526020819052604090205460ff1690565b6100ff6100b136600461022f565b73ffffffffffffffffffffffffffffffffffffffff165f90815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b005b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f830639ac00000000000000000000000000000000000000000000000000000000148061019357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b5f602082840312156101a9575f80fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101d8575f80fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610202575f80fd5b919050565b5f8060408385031215610218575f80fd5b610221836101df565b946020939093013593505050565b5f6020828403121561023f575f80fd5b6101d8826101df56fea2646970667358221220aac2d315e255d9228a50184c193741624d8abf06d04bdcf06d92a9b49c3a3f9864736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "MockWhitelistingContract",
    constructorArgs: [whitelistedAddresses: AbiParameterToPrimitiveType<{"name":"whitelistedAddresses","type":"address[]"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MockWhitelistingContract$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/test/mocks/MockWhitelistingContract.sol:MockWhitelistingContract",
    constructorArgs: [whitelistedAddresses: AbiParameterToPrimitiveType<{"name":"whitelistedAddresses","type":"address[]"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MockWhitelistingContract$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "MockWhitelistingContract",
    constructorArgs: [whitelistedAddresses: AbiParameterToPrimitiveType<{"name":"whitelistedAddresses","type":"address[]"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MockWhitelistingContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/test/mocks/MockWhitelistingContract.sol:MockWhitelistingContract",
    constructorArgs: [whitelistedAddresses: AbiParameterToPrimitiveType<{"name":"whitelistedAddresses","type":"address[]"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MockWhitelistingContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "MockWhitelistingContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MockWhitelistingContract$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/test/mocks/MockWhitelistingContract.sol:MockWhitelistingContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MockWhitelistingContract$Type["abi"]>>;
}
