// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { OperatorLib$Type } from "./OperatorLib";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["OperatorLib"]: OperatorLib$Type;
    ["contracts/libraries/OperatorLib.sol:OperatorLib"]: OperatorLib$Type;
  }

  interface ContractTypesMap {
    ["OperatorLib"]: GetContractReturnType<OperatorLib$Type["abi"]>;
    ["contracts/libraries/OperatorLib.sol:OperatorLib"]: GetContractReturnType<OperatorLib$Type["abi"]>;
  }
}
