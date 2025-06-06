// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Types64$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Types64",
  "sourceName": "contracts/libraries/Types.sol",
  "abi": [],
  "bytecode": "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220cbc0e4e80c8e00fd1ede96da96f94a84d2840e9a2a088b5eca6ca87ba38c688364736f6c63430008180033",
  "deployedBytecode": "0x730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220cbc0e4e80c8e00fd1ede96da96f94a84d2840e9a2a088b5eca6ca87ba38c688364736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Types64",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Types64$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/libraries/Types.sol:Types64",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Types64$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Types64",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Types64$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/libraries/Types.sol:Types64",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Types64$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Types64",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Types64$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/libraries/Types.sol:Types64",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Types64$Type["abi"]>>;
}
