// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IERC1967Upgradeable$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IERC1967Upgradeable",
  "sourceName": "@openzeppelin/contracts-upgradeable/interfaces/IERC1967Upgradeable.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "IERC1967Upgradeable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IERC1967Upgradeable$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts-upgradeable/interfaces/IERC1967Upgradeable.sol:IERC1967Upgradeable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IERC1967Upgradeable$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IERC1967Upgradeable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IERC1967Upgradeable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts-upgradeable/interfaces/IERC1967Upgradeable.sol:IERC1967Upgradeable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IERC1967Upgradeable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IERC1967Upgradeable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IERC1967Upgradeable$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts-upgradeable/interfaces/IERC1967Upgradeable.sol:IERC1967Upgradeable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IERC1967Upgradeable$Type["abi"]>>;
}
