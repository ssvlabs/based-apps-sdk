import { i as isObjectLike$1, b as baseGetTag, a as isObject, p as process$1, c as configArgsSchema, d as bam_paid_graph_endpoints, e as bam_graph_endpoints, f as contracts, s as stringifyBigints, g as isUndefined, t as tryCatch$1 } from "./try-catch-DRhlspIY.mjs";
import { k, j, l, h, n, r } from "./try-catch-DRhlspIY.mjs";
import { parseGwei, decodeEventLog } from "viem";
const BAppABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  { inputs: [], name: "BAppAlreadyOptedIn", type: "error" },
  { inputs: [], name: "BAppAlreadyRegistered", type: "error" },
  { inputs: [], name: "BAppDoesNotSupportInterface", type: "error" },
  { inputs: [], name: "BAppNotOptedIn", type: "error" },
  { inputs: [], name: "BAppNotRegistered", type: "error" },
  { inputs: [], name: "BAppOptInFailed", type: "error" },
  { inputs: [], name: "BAppSlashingFailed", type: "error" },
  { inputs: [], name: "DelegationAlreadyExists", type: "error" },
  { inputs: [], name: "DelegationDoesNotExist", type: "error" },
  { inputs: [], name: "DelegationExistsWithSameValue", type: "error" },
  {
    inputs: [{ internalType: "address", name: "implementation", type: "address" }],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  { inputs: [], name: "ERC1967NonPayable", type: "error" },
  { inputs: [], name: "ExceedingMaxShares", type: "error" },
  { inputs: [], name: "ExceedingPercentageUpdate", type: "error" },
  { inputs: [], name: "FailedCall", type: "error" },
  { inputs: [], name: "FeeAlreadySet", type: "error" },
  { inputs: [], name: "InsufficientBalance", type: "error" },
  { inputs: [], name: "InsufficientLiquidity", type: "error" },
  { inputs: [], name: "InvalidAccountGeneration", type: "error" },
  { inputs: [], name: "InvalidAmount", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "expectedOwner", type: "address" }
    ],
    name: "InvalidBAppOwner",
    type: "error"
  },
  { inputs: [], name: "InvalidInitialization", type: "error" },
  { inputs: [], name: "InvalidMaxFeeIncrement", type: "error" },
  { inputs: [], name: "InvalidPercentageIncrement", type: "error" },
  { inputs: [], name: "InvalidStrategyFee", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "caller", type: "address" },
      { internalType: "address", name: "expectedOwner", type: "address" }
    ],
    name: "InvalidStrategyOwner",
    type: "error"
  },
  { inputs: [], name: "InvalidToken", type: "error" },
  { inputs: [], name: "NoPendingFeeUpdate", type: "error" },
  { inputs: [], name: "NoPendingObligationUpdate", type: "error" },
  { inputs: [], name: "NoPendingWithdrawal", type: "error" },
  { inputs: [], name: "NotInitializing", type: "error" },
  { inputs: [], name: "ObligationAlreadySet", type: "error" },
  { inputs: [], name: "ObligationHasNotBeenCreated", type: "error" },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  { inputs: [], name: "RequestTimeExpired", type: "error" },
  { inputs: [], name: "SlashingDisabled", type: "error" },
  {
    inputs: [{ internalType: "uint8", name: "moduleId", type: "uint8" }],
    name: "TargetModuleDoesNotExist",
    type: "error"
  },
  { inputs: [], name: "TimelockNotElapsed", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "TokenAlreadyAddedToBApp",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "TokenNotSupportedByBApp",
    type: "error"
  },
  { inputs: [], name: "UUPSUnauthorizedCallContext", type: "error" },
  {
    inputs: [{ internalType: "bytes32", name: "slot", type: "bytes32" }],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error"
  },
  { inputs: [], name: "WithdrawTransferFailed", type: "error" },
  { inputs: [], name: "WithdrawalsDisabled", type: "error" },
  { inputs: [], name: "ZeroAddressNotAllowed", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "AccountMetadataURIUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "BAppMetadataURIUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "obligationPercentages",
        type: "uint32[]"
      }
    ],
    name: "BAppOptedInByStrategy",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "sharedRiskLevel",
        type: "uint32[]"
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "BAppRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          {
            internalType: "uint32",
            name: "sharedRiskLevel",
            type: "uint32"
          }
        ],
        indexed: false,
        internalType: "struct ICore.TokenConfig[]",
        name: "tokenConfigs",
        type: "tuple[]"
      }
    ],
    name: "BAppTokensUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percentage",
        type: "uint32"
      }
    ],
    name: "DelegationCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "DelegationRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percentage",
        type: "uint32"
      }
    ],
    name: "DelegationUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "disabledFeatures",
        type: "uint32"
      }
    ],
    name: "DisabledFeaturesUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "feeExpireTime",
        type: "uint32"
      }
    ],
    name: "FeeExpireTimeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "feeTimelockPeriod",
        type: "uint32"
      }
    ],
    name: "FeeTimelockPeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "newMaxFeeIncrement",
        type: "uint32"
      }
    ],
    name: "MaxFeeIncrementSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum SSVCoreModules",
        name: "moduleId",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "address",
        name: "moduleAddress",
        type: "address"
      }
    ],
    name: "ModuleUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percentage",
        type: "uint32"
      }
    ],
    name: "ObligationCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "obligationExpireTime",
        type: "uint32"
      }
    ],
    name: "ObligationExpireTimeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "obligationTimelockPeriod",
        type: "uint32"
      }
    ],
    name: "ObligationTimelockPeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percentage",
        type: "uint32"
      }
    ],
    name: "ObligationUpdateProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percentage",
        type: "uint32"
      }
    ],
    name: "ObligationUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "SlashingFundWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "fee",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "StrategyCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "StrategyDeposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "proposedFee",
        type: "uint32"
      }
    ],
    name: "StrategyFeeUpdateProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newFee",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFast",
        type: "bool"
      }
    ],
    name: "StrategyFeeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "maxFeeIncrement",
        type: "uint32"
      }
    ],
    name: "StrategyMaxFeeIncrementUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    name: "StrategyMaxSharesUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "StrategyMetadataURIUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "bApp",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percentage",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "StrategySlashed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFast",
        type: "bool"
      }
    ],
    name: "StrategyWithdrawal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "strategyId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "StrategyWithdrawalProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenUpdateTimelockPeriod",
        type: "uint32"
      }
    ],
    name: "TokenUpdateTimelockPeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "withdrawalExpireTime",
        type: "uint32"
      }
    ],
    name: "WithdrawalExpireTimeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "withdrawalTimelockPeriod",
        type: "uint32"
      }
    ],
    name: "WithdrawalTimelockPeriodUpdated",
    type: "event"
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "bApp", type: "address" }
    ],
    name: "accountBAppStrategy",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "bAppTokens",
    outputs: [
      { internalType: "uint32", name: "currentValue", type: "uint32" },
      { internalType: "bool", name: "isSet", type: "bool" },
      { internalType: "uint32", name: "pendingValue", type: "uint32" },
      { internalType: "uint32", name: "effectTime", type: "uint32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      {
        internalType: "uint32",
        name: "obligationPercentage",
        type: "uint32"
      }
    ],
    name: "createObligation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "fee", type: "uint32" },
      { internalType: "string", name: "metadataURI", type: "string" }
    ],
    name: "createStrategy",
    outputs: [{ internalType: "uint32", name: "strategyId", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "uint32", name: "percentage", type: "uint32" }
    ],
    name: "delegateBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "receiver", type: "address" }
    ],
    name: "delegations",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "strategyId", type: "uint32" }],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "disabledFeatures",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ethAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "feeExpireTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feeTimelockPeriod",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "strategyId", type: "uint32" }],
    name: "feeUpdateRequests",
    outputs: [
      { internalType: "uint32", name: "percentage", type: "uint32" },
      { internalType: "uint32", name: "requestTime", type: "uint32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "strategyId", type: "uint32" }],
    name: "finalizeFeeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "finalizeUpdateObligation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "finalizeWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "strategyId", type: "uint32" }],
    name: "finalizeWithdrawalETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum SSVCoreModules",
        name: "moduleId",
        type: "uint8"
      }
    ],
    name: "getModuleAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "getSlashableBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "slashableBalance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner_", type: "address" },
      {
        internalType: "contract IBasedAppManager",
        name: "ssvBasedAppManger_",
        type: "address"
      },
      {
        internalType: "contract IStrategyManager",
        name: "ssvStrategyManager_",
        type: "address"
      },
      {
        internalType: "contract IProtocolManager",
        name: "protocolManager_",
        type: "address"
      },
      {
        components: [
          { internalType: "uint256", name: "maxShares", type: "uint256" },
          {
            internalType: "uint32",
            name: "feeTimelockPeriod",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "feeExpireTime",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "withdrawalTimelockPeriod",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "withdrawalExpireTime",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "obligationTimelockPeriod",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "obligationExpireTime",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "tokenUpdateTimelockPeriod",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "maxFeeIncrement",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "disabledFeatures",
            type: "uint32"
          }
        ],
        internalType: "struct ProtocolStorageLib.Data",
        name: "config",
        type: "tuple"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "maxFeeIncrement",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxPercentage",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "maxShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "obligationExpireTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "bApp", type: "address" }
    ],
    name: "obligationRequests",
    outputs: [
      { internalType: "uint32", name: "percentage", type: "uint32" },
      { internalType: "uint32", name: "requestTime", type: "uint32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "obligationTimelockPeriod",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "obligations",
    outputs: [
      { internalType: "uint32", name: "percentage", type: "uint32" },
      { internalType: "bool", name: "isSet", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address[]", name: "tokens", type: "address[]" },
      {
        internalType: "uint32[]",
        name: "obligationPercentages",
        type: "uint32[]"
      },
      { internalType: "bytes", name: "data", type: "bytes" }
    ],
    name: "optInToBApp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "ownedStrategies",
    outputs: [{ internalType: "uint32[]", name: "strategyIds", type: "uint32[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "uint32", name: "proposedFee", type: "uint32" }
    ],
    name: "proposeFeeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      {
        internalType: "uint32",
        name: "obligationPercentage",
        type: "uint32"
      }
    ],
    name: "proposeUpdateObligation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "proposeWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "proposeWithdrawalETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "uint32", name: "proposedFee", type: "uint32" }
    ],
    name: "reduceFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      {
        internalType: "uint32[]",
        name: "sharedRiskLevels",
        type: "uint32[]"
      },
      { internalType: "string", name: "metadataURI", type: "string" }
    ],
    name: "registerBApp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "bApp", type: "address" }],
    name: "registeredBApps",
    outputs: [{ internalType: "bool", name: "isRegistered", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    name: "removeDelegatedBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "bApp", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint32", name: "percentage", type: "uint32" },
      { internalType: "bytes", name: "data", type: "bytes" }
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "slashingFund",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "strategyId", type: "uint32" }],
    name: "strategies",
    outputs: [
      { internalType: "address", name: "strategyOwner", type: "address" },
      { internalType: "uint32", name: "fee", type: "uint32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "strategyAccountShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "strategyGeneration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "strategyTotalBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "strategyTotalShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenUpdateTimelockPeriod",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "delegator", type: "address" }],
    name: "totalDelegatedPercentage",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "metadataURI", type: "string" }],
    name: "updateAccountMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "metadataURI", type: "string" }],
    name: "updateBAppMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          {
            internalType: "uint32",
            name: "sharedRiskLevel",
            type: "uint32"
          }
        ],
        internalType: "struct ICore.TokenConfig[]",
        name: "tokenConfigs",
        type: "tuple[]"
      }
    ],
    name: "updateBAppsTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "uint32", name: "percentage", type: "uint32" }
    ],
    name: "updateDelegatedBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "disabledFeatures", type: "uint32" }],
    name: "updateDisabledFeatures",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateFeeExpireTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateFeeTimelockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateMaxFeeIncrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "updateMaxShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum SSVCoreModules[]",
        name: "moduleIds",
        type: "uint8[]"
      },
      {
        internalType: "address[]",
        name: "moduleAddresses",
        type: "address[]"
      }
    ],
    name: "updateModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateObligationExpireTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateObligationTimelockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "string", name: "metadataURI", type: "string" }
    ],
    name: "updateStrategyMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateTokenUpdateTimelockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateWithdrawalExpireTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "value", type: "uint32" }],
    name: "updateWithdrawalTimelockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      { internalType: "bytes", name: "data", type: "bytes" }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "withdrawETHSlashingFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "withdrawSlashingFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawalExpireTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint32", name: "strategyId", type: "uint32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "withdrawalRequests",
    outputs: [
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "uint32", name: "requestTime", type: "uint32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawalTimelockPeriod",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  }
];
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike$1(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var nativeCeil = Math.ceil, nativeMax = Math.max;
function chunk(array, size, guard) {
  if (size === void 0) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
  while (index < length) {
    result[resIndex++] = baseSlice(array, index, index += size);
  }
  return result;
}
const getValidatorsBalance = async (apis, args) => {
  const validators = await apis.bam.getValidatorsByAccount(args);
  if (!validators.length)
    return {
      account: args.account,
      validators: [],
      balance: "0"
    };
  const chunks = chunk(validators, 500);
  const results = await Promise.all(
    chunks.map(
      (chunk2) => apis.beacon.getValidatorBalances({
        stateId: "head",
        validatorIds: chunk2
      })
    )
  );
  const data = results.flatMap((v) => v.data);
  const totalBalance = parseGwei(
    data.reduce((acc, v) => {
      return acc + BigInt(v.balance);
    }, 0n).toString()
  );
  return {
    account: args.account,
    validators,
    balance: totalBalance
  };
};
const getParticipantWeights = async (apis, args) => {
  const bAppData = await apis.bam.getParticipantWeightInput(args);
  if (!bAppData) {
    throw new Error("bApp not found");
  }
  const strategyWeightsMap = /* @__PURE__ */ new Map();
  const riskByTokenAndStrategy = /* @__PURE__ */ new Map();
  for (const strategyData of bAppData.strategies) {
    const strategy = strategyData.strategy;
    strategyWeightsMap.set(strategy.id, {
      id: strategy.id,
      tokenWeights: []
    });
    const tokenRisks = /* @__PURE__ */ new Map();
    for (const obligation of strategyData.obligations) {
      const token = obligation.token.toLowerCase();
      const currentRisk = tokenRisks.get(token) ?? 0;
      tokenRisks.set(token, currentRisk + Number(obligation.percentage) / 1e4);
    }
    for (const [token, risk] of tokenRisks) {
      if (!riskByTokenAndStrategy.has(token)) {
        riskByTokenAndStrategy.set(token, /* @__PURE__ */ new Map());
      }
      riskByTokenAndStrategy.get(token).set(strategy.id, risk);
    }
  }
  for (const bAppToken of bAppData.bAppTokens) {
    const token = bAppToken.token;
    const tokenLower = token.toLowerCase();
    const beta = Number(bAppToken.sharedRiskLevel) / 1e4;
    const totalObligatedBalance = BigInt(bAppToken.totalObligatedBalance);
    if (totalObligatedBalance === 0n) continue;
    let normalizationDenominator = 0;
    const tempWeights = [];
    for (const strategyData of bAppData.strategies) {
      const strategy = strategyData.strategy;
      const strategyId = strategy.id;
      const obligation = strategyData.obligations.find(
        (ob) => ob.token.toLowerCase() === tokenLower
      );
      if (!obligation) continue;
      const balance = strategy.balances.find((bal) => bal.token.toLowerCase() === tokenLower);
      if (!balance) continue;
      const obligatedBalance = BigInt(obligation.obligatedBalance);
      const risk = Math.max(1, riskByTokenAndStrategy.get(tokenLower)?.get(strategyId) ?? 0);
      const exponentialTerm = Math.exp(-beta * risk);
      const term = Number(obligatedBalance) / Number(totalObligatedBalance) * exponentialTerm;
      normalizationDenominator += term;
      tempWeights.push({
        strategyId,
        weight: term
      });
    }
    const cToken = normalizationDenominator === 0 ? 0 : 1 / normalizationDenominator;
    for (const { strategyId, weight } of tempWeights) {
      const strategyWeight = strategyWeightsMap.get(strategyId);
      if (strategyWeight) {
        strategyWeight.tokenWeights.push({
          token,
          weight: weight * cToken
        });
      }
    }
  }
  const delegatedBalances = /* @__PURE__ */ new Map();
  let totalBAppBalance = 0;
  for (const strategyData of bAppData.strategies) {
    const strategy = strategyData.strategy;
    if (!strategy.owner.delegators.length) continue;
    const balances = await Promise.all(
      strategy.owner.delegators.filter((d) => Number(d.percentage) > 0).map(async (delegator) => {
        const response = await getValidatorsBalance(apis, {
          account: delegator.delegator.id
        });
        return {
          delegated: Number(response.balance) * Number(delegator.percentage) / 1e4
        };
      })
    );
    const delegatedBalance = balances.reduce((acc, balance) => acc + balance.delegated, 0);
    delegatedBalances.set(strategy.id, delegatedBalance);
    totalBAppBalance += delegatedBalance;
  }
  for (const [strategyId, delegatedBalance] of delegatedBalances.entries()) {
    const strategyWeight = strategyWeightsMap.get(strategyId);
    if (strategyWeight) {
      strategyWeight.validatorBalanceWeight = Number(delegatedBalance) / Number(totalBAppBalance);
    }
  }
  return Array.from(strategyWeightsMap.values());
};
const getDelegatedBalances = async (apis, args) => {
  const bAppDelegators = await apis.bam.getBAppDelegators(args);
  if (!bAppDelegators)
    return {
      bAppTotalDelegatedBalance: 0n,
      bAppTotalDelegatedBalances: []
    };
  const bAppTotalDelegatedBalances = await Promise.all(
    bAppDelegators.strategies.map(async (strategy) => {
      const delegation = (await Promise.all(
        strategy.strategy.owner.delegators.map(
          (d) => getValidatorsBalance(apis, {
            account: d.delegator.id
          })
        )
      )).reduce((acc, balance) => acc + BigInt(balance.balance), 0n);
      return {
        strategyId: strategy.strategy.id,
        delegation
      };
    })
  );
  const bAppTotalDelegatedBalance = bAppTotalDelegatedBalances.reduce(
    (acc, balance) => acc + balance.delegation,
    0n
  );
  return {
    bAppTotalDelegatedBalance,
    bAppTotalDelegatedBalances
  };
};
const getObligatedBalances$1 = async (apis, args) => {
  const bAppObligations = await apis.bam.getObligatedBalances(args);
  if (!bAppObligations) return [];
  return bAppObligations;
};
const getBasedAppsAPI = (apis) => {
  return {
    getValidatorsBalance: getValidatorsBalance.bind(null, apis),
    getParticipantWeights: getParticipantWeights.bind(null, apis),
    getDelegatedBalances: getDelegatedBalances.bind(null, apis),
    getObligatedBalances: getObligatedBalances$1.bind(null, apis)
  };
};
function normalize(strArray) {
  const resultArray = [];
  if (strArray.length === 0) {
    return "";
  }
  strArray = strArray.filter((part) => part !== "");
  if (typeof strArray[0] !== "string") {
    throw new TypeError("Url must be a string. Received " + strArray[0]);
  }
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    strArray[0] = strArray.shift() + strArray[0];
  }
  if (strArray[0] === "/" && strArray.length > 1) {
    strArray[0] = strArray.shift() + strArray[0];
  }
  if (strArray[0].match(/^file:\/\/\//)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1:///");
  } else if (!strArray[0].match(/^\[.*:.*\]/)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1://");
  }
  for (let i = 0; i < strArray.length; i++) {
    let component = strArray[i];
    if (typeof component !== "string") {
      throw new TypeError("Url must be a string. Received " + component);
    }
    if (i > 0) {
      component = component.replace(/^[\/]+/, "");
    }
    if (i < strArray.length - 1) {
      component = component.replace(/[\/]+$/, "");
    } else {
      component = component.replace(/[\/]+$/, "/");
    }
    if (component === "") {
      continue;
    }
    resultArray.push(component);
  }
  let str = "";
  for (let i = 0; i < resultArray.length; i++) {
    const part = resultArray[i];
    if (i === 0) {
      str += part;
      continue;
    }
    const prevPart = resultArray[i - 1];
    if (prevPart && prevPart.endsWith("?") || prevPart.endsWith("#")) {
      str += part;
      continue;
    }
    str += "/" + part;
  }
  str = str.replace(/\/(\?|&|#[^!])/g, "$1");
  const [beforeHash, afterHash] = str.split("#");
  const parts = beforeHash.split(/(?:\?|&)+/).filter(Boolean);
  str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&") + (afterHash && afterHash.length > 0 ? "#" + afterHash : "");
  return str;
}
function urlJoin(...args) {
  const parts = Array.from(Array.isArray(args[0]) ? args[0] : args);
  return normalize(parts);
}
const getValidatorBalances = (baseApi, args) => {
  return fetch(urlJoin(baseApi, `/eth/v1/beacon/states/${args.stateId}/validator_balances`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(args.validatorIds)
  }).then((res) => res.json());
};
const getBeaconChainAPI = (endpoint) => {
  return {
    getValidatorBalances: getValidatorBalances.bind(null, endpoint)
  };
};
const checkOperatorDKGEnabled = (baseApi, dkgAddresses) => {
  return fetch(urlJoin(baseApi, `/operators/dkg_health_check`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      dkgAddresses
    })
  }).then(
    (res) => res.json()
  );
};
const getSSVAPI = (endpoint) => {
  return {
    checkOperatorDKGEnabled: checkOperatorDKGEnabled.bind(null, endpoint)
  };
};
const GetStrategyBAppOptInsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetStrategyBAppOptIns" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "strategyBAppOptIns" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "bApp_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "id" },
                            value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategy" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "balances" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "token" } },
                            { kind: "Field", name: { kind: "Name", value: "balance" } }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "obligations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "token" } },
                      { kind: "Field", name: { kind: "Name", value: "percentage" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetParticipantWeightInputDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetParticipantWeightInput" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bAppTokens" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "token" } },
                      { kind: "Field", name: { kind: "Name", value: "sharedRiskLevel" } },
                      { kind: "Field", name: { kind: "Name", value: "totalObligatedBalance" } }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "obligations" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "obligatedBalance" } },
                            { kind: "Field", name: { kind: "Name", value: "token" } },
                            { kind: "Field", name: { kind: "Name", value: "percentage" } }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strategy" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "delegators" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "percentage" }
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "delegator" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "id" }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "balances" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "token" } },
                                  { kind: "Field", name: { kind: "Name", value: "riskValue" } }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetObligatedBalancesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetObligatedBalances" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bAppTokens" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "totalObligatedBalance" } },
                      { kind: "Field", name: { kind: "Name", value: "token" } }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strategy" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "obligations" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "token" } },
                            { kind: "Field", name: { kind: "Name", value: "obligatedBalance" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetBAppDelegatorsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBAppDelegators" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strategy" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "delegators" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "percentage" }
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "delegator" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "id" }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetValidatorsByAccountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetValidatorsByAccount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "account" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "validators" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "owner" },
                      value: { kind: "Variable", name: { kind: "Name", value: "account" } }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }]
            }
          }
        ]
      }
    }
  ]
};
const GetBappMetadataUriDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBappMetadataURI" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "metadataURI" } }]
            }
          }
        ]
      }
    }
  ]
};
const GetAllBappsMetadataUrIsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllBappsMetadataURIs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapps" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "metadataURI" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetAllStrategyObligatedBalancesForBappDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllStrategyObligatedBalancesForBapp" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strategy" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "balances" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "balance" } },
                                  { kind: "Field", name: { kind: "Name", value: "token" } }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetDepositedBalancesForStrategyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDepositedBalancesForStrategy" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "strategyId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "strategy" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "strategyId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposits" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contributor" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }]
                        }
                      },
                      { kind: "Field", name: { kind: "Name", value: "depositAmount" } },
                      { kind: "Field", name: { kind: "Name", value: "token" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetAllStrategiesDepositedToDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllStrategiesDepositedTo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "accountId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "accountId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposits" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strategy" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "balances" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "balance" } },
                                  { kind: "Field", name: { kind: "Name", value: "token" } }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      { kind: "Field", name: { kind: "Name", value: "depositAmount" } },
                      { kind: "Field", name: { kind: "Name", value: "token" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetTotalDelegatedPercentageForAccountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTotalDelegatedPercentageForAccount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "accountId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "accountId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "totalDelegatedPercentage" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetAllStrategiesForBappDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllStrategiesForBapp" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bAppId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bapp" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "bAppId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strategy" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const GetAllStrategiesForAccountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllStrategiesForAccount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "accountId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "accountId" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "strategies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "balances" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "balance" } },
                            { kind: "Field", name: { kind: "Name", value: "token" } }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
const getStrategyBAppOptIns = (client, args) => client.request(GetStrategyBAppOptInsDocument, args).then((res) => res.strategyBAppOptIns);
const getParticipantWeightInput = (client, args) => client.request(GetParticipantWeightInputDocument, args).then((res) => res.bapp);
const getObligatedBalances = (client, args) => client.request(GetObligatedBalancesDocument, args).then((res) => res.bapp);
const getBAppDelegators = (client, args) => client.request(GetBAppDelegatorsDocument, args).then((res) => res.bapp);
const getValidatorsByAccount = (client, args) => client.request(GetValidatorsByAccountDocument, args).then((res) => res.validators.map((v) => v.id));
const getBappMetadataURI = (client, args) => client.request(GetBappMetadataUriDocument, args).then((res) => res.bapp);
const getAllBappsMetadataURIs = (client) => client.request(GetAllBappsMetadataUrIsDocument).then((res) => res.bapps);
const getAllStrategyObligatedBalancesForBapp = (client, args) => client.request(GetAllStrategyObligatedBalancesForBappDocument, args).then((res) => res.bapp);
const getDepositedBalancesForStrategy = (client, args) => client.request(GetDepositedBalancesForStrategyDocument, args).then((res) => res.strategy);
const getAllStrategiesDepositedTo = (client, args) => client.request(GetAllStrategiesDepositedToDocument, args).then((res) => res.account);
const getTotalDelegatedPercentageForAccount = (client, args) => client.request(GetTotalDelegatedPercentageForAccountDocument, args).then((res) => res.account?.totalDelegatedPercentage);
const getAllStrategiesForBapp = (client, args) => client.request(GetAllStrategiesForBappDocument, args).then((res) => res.bapp?.strategies.map((strategyInfo) => strategyInfo.strategy.id) || []);
const getAllStrategiesForAccount = (client, args) => client.request(GetAllStrategiesForAccountDocument, args).then((res) => res.account?.strategies || []);
const getBAMQueries = (client) => ({
  getStrategyBAppOptIns: getStrategyBAppOptIns.bind(null, client),
  getParticipantWeightInput: getParticipantWeightInput.bind(null, client),
  getObligatedBalances: getObligatedBalances.bind(null, client),
  getBAppDelegators: getBAppDelegators.bind(null, client),
  getValidatorsByAccount: getValidatorsByAccount.bind(null, client),
  getBappMetadataURI: getBappMetadataURI.bind(null, client),
  getAllBappsMetadataURIs: getAllBappsMetadataURIs.bind(null, client),
  getAllStrategyObligatedBalancesForBapp: getAllStrategyObligatedBalancesForBapp.bind(
    null,
    client
  ),
  getDepositedBalancesForStrategy: getDepositedBalancesForStrategy.bind(
    null,
    client
  ),
  getAllStrategiesDepositedTo: getAllStrategiesDepositedTo.bind(null, client),
  getTotalDelegatedPercentageForAccount: getTotalDelegatedPercentageForAccount.bind(
    null,
    client
  ),
  getAllStrategiesForBapp: getAllStrategiesForBapp.bind(null, client),
  getAllStrategiesForAccount: getAllStrategiesForAccount.bind(null, client)
});
const createSSVAPI = (endpoint) => {
  return getSSVAPI(endpoint);
};
const createBeaconChainAPI = (endpoint) => {
  return getBeaconChainAPI(endpoint);
};
const createBAMQueries = (graphqlClient) => {
  return getBAMQueries(graphqlClient);
};
const createBasedAppsAPI = (apis) => {
  return getBasedAppsAPI(apis);
};
class ClientError extends Error {
  response;
  request;
  constructor(response, request) {
    const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
      response,
      request
    })}`;
    super(message);
    Object.setPrototypeOf(this, ClientError.prototype);
    this.response = response;
    this.request = request;
    if (typeof Error.captureStackTrace === `function`) {
      Error.captureStackTrace(this, ClientError);
    }
  }
  static extractMessage(response) {
    return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${String(response.status)})`;
  }
}
const uppercase = (str) => str.toUpperCase();
const callOrIdentity = (value) => {
  return typeof value === `function` ? value() : value;
};
const zip = (a, b) => a.map((k2, i) => [k2, b[i]]);
const HeadersInitToPlainObject = (headers) => {
  let oHeaders = {};
  if (headers instanceof Headers) {
    oHeaders = HeadersInstanceToPlainObject(headers);
  } else if (Array.isArray(headers)) {
    headers.forEach(([name, value]) => {
      if (name && value !== void 0) {
        oHeaders[name] = value;
      }
    });
  } else if (headers) {
    oHeaders = headers;
  }
  return oHeaders;
};
const HeadersInstanceToPlainObject = (headers) => {
  const o = {};
  headers.forEach((v, k2) => {
    o[k2] = v;
  });
  return o;
};
const tryCatch = (fn) => {
  try {
    const result = fn();
    if (isPromiseLikeValue(result)) {
      return result.catch((error) => {
        return errorFromMaybeError(error);
      });
    }
    return result;
  } catch (error) {
    return errorFromMaybeError(error);
  }
};
const errorFromMaybeError = (maybeError) => {
  if (maybeError instanceof Error)
    return maybeError;
  return new Error(String(maybeError));
};
const isPromiseLikeValue = (value) => {
  return typeof value === `object` && value !== null && `then` in value && typeof value.then === `function` && `catch` in value && typeof value.catch === `function` && `finally` in value && typeof value.finally === `function`;
};
const casesExhausted = (value) => {
  throw new Error(`Unhandled case: ${String(value)}`);
};
const isPlainObject = (value) => {
  return typeof value === `object` && value !== null && !Array.isArray(value);
};
const parseBatchRequestArgs = (documentsOrOptions, requestHeaders) => {
  return documentsOrOptions.documents ? documentsOrOptions : {
    documents: documentsOrOptions,
    requestHeaders,
    signal: void 0
  };
};
const parseRawRequestArgs = (queryOrOptions, variables, requestHeaders) => {
  return queryOrOptions.query ? queryOrOptions : {
    query: queryOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      "Unexpected invariant triggered."
    );
  }
}
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant(false);
    if (match.index >= position) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path !== null && path !== void 0 ? path : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
    );
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0 ? void 0 : originalError.extensions
    ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
}
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}
class Location {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Token {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = (
    // add leading and trailing new lines only if it improves readability
    !isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes
  );
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));
class Lexer {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
}
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position;
        continue;
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 35:
        return readComment(lexer, position);
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
const isProduction = globalThis.process && // eslint-disable-next-line no-undef
process$1.env.NODE_ENV === "production";
const instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  isProduction ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
      );
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  }
);
class Source {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(
      false,
      "line in locationOffset is 1-indexed and must be positive."
    );
    this.locationOffset.column > 0 || devAssert(
      false,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function isSource(source) {
  return instanceOf(source, Source);
}
function parse(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
class Parser {
  constructor(source, options = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`
            );
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source
      );
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const { maxTokens } = this._options;
    const token = this._lexer.advance();
    if (maxTokens !== void 0 && token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`
        );
      }
    }
  }
}
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
const escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node)
          );
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
function print(ast) {
  return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, " ")
        ],
        " "
      );
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap("", alias, ": ") + name;
      let argsLine = prefix + wrap("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(
      [
        "...",
        wrap("on ", typeCondition),
        join(directives, " "),
        selectionSet
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
      // or removed in the future.
      `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    )
  },
  // Value
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
      [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
      ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(
      ["extend schema", join(directives, " "), block(operationTypes)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) => join(
      [
        "extend union",
        name,
        join(directives, " "),
        wrap("= ", join(types, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
const ACCEPT_HEADER = `Accept`;
const CONTENT_TYPE_HEADER = `Content-Type`;
const CONTENT_TYPE_JSON = `application/json`;
const CONTENT_TYPE_GQL = `application/graphql-response+json`;
const cleanQuery = (str) => str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
const isGraphQLContentType = (contentType) => {
  const contentTypeLower = contentType.toLowerCase();
  return contentTypeLower.includes(CONTENT_TYPE_GQL) || contentTypeLower.includes(CONTENT_TYPE_JSON);
};
const parseGraphQLExecutionResult = (result) => {
  try {
    if (Array.isArray(result)) {
      return {
        _tag: `Batch`,
        executionResults: result.map(parseExecutionResult)
      };
    } else if (isPlainObject(result)) {
      return {
        _tag: `Single`,
        executionResult: parseExecutionResult(result)
      };
    } else {
      throw new Error(`Invalid execution result: result is not object or array. 
Got:
${String(result)}`);
    }
  } catch (e) {
    return e;
  }
};
const parseExecutionResult = (result) => {
  if (typeof result !== `object` || result === null) {
    throw new Error(`Invalid execution result: result is not object`);
  }
  let errors = void 0;
  let data = void 0;
  let extensions = void 0;
  if (`errors` in result) {
    if (!isPlainObject(result.errors) && !Array.isArray(result.errors)) {
      throw new Error(`Invalid execution result: errors is not plain object OR array`);
    }
    errors = result.errors;
  }
  if (`data` in result) {
    if (!isPlainObject(result.data) && result.data !== null) {
      throw new Error(`Invalid execution result: data is not plain object`);
    }
    data = result.data;
  }
  if (`extensions` in result) {
    if (!isPlainObject(result.extensions))
      throw new Error(`Invalid execution result: extensions is not plain object`);
    extensions = result.extensions;
  }
  return {
    data,
    errors,
    extensions
  };
};
const isRequestResultHaveErrors = (result) => result._tag === `Batch` ? result.executionResults.some(isExecutionResultHaveErrors) : isExecutionResultHaveErrors(result.executionResult);
const isExecutionResultHaveErrors = (result) => Array.isArray(result.errors) ? result.errors.length > 0 : Boolean(result.errors);
const isOperationDefinitionNode = (definition) => {
  return typeof definition === `object` && definition !== null && `kind` in definition && definition.kind === Kind.OPERATION_DEFINITION;
};
const extractOperationName = (document) => {
  let operationName = void 0;
  const defs = document.definitions.filter(isOperationDefinitionNode);
  if (defs.length === 1) {
    operationName = defs[0].name?.value;
  }
  return operationName;
};
const extractIsMutation = (document) => {
  let isMutation = false;
  const defs = document.definitions.filter(isOperationDefinitionNode);
  if (defs.length === 1) {
    isMutation = defs[0].operation === OperationTypeNode.MUTATION;
  }
  return isMutation;
};
const analyzeDocument = (document, excludeOperationName) => {
  const expression = typeof document === `string` ? document : print(document);
  let isMutation = false;
  let operationName = void 0;
  if (excludeOperationName) {
    return { expression, isMutation, operationName };
  }
  const docNode = tryCatch(() => typeof document === `string` ? parse(document) : document);
  if (docNode instanceof Error) {
    return { expression, isMutation, operationName };
  }
  operationName = extractOperationName(docNode);
  isMutation = extractIsMutation(docNode);
  return { expression, operationName, isMutation };
};
const defaultJsonSerializer = JSON;
const runRequest = async (input) => {
  const config = {
    ...input,
    method: input.request._tag === `Single` ? input.request.document.isMutation ? `POST` : uppercase(input.method ?? `post`) : input.request.hasMutations ? `POST` : uppercase(input.method ?? `post`),
    fetchOptions: {
      ...input.fetchOptions,
      errorPolicy: input.fetchOptions.errorPolicy ?? `none`
    }
  };
  const fetcher = createFetcher(config.method);
  const fetchResponse = await fetcher(config);
  if (!fetchResponse.ok) {
    return new ClientError({ status: fetchResponse.status, headers: fetchResponse.headers }, {
      query: input.request._tag === `Single` ? input.request.document.expression : input.request.query,
      variables: input.request.variables
    });
  }
  const result = await parseResultFromResponse(fetchResponse, input.fetchOptions.jsonSerializer ?? defaultJsonSerializer);
  if (result instanceof Error)
    throw result;
  const clientResponseBase = {
    status: fetchResponse.status,
    headers: fetchResponse.headers
  };
  if (isRequestResultHaveErrors(result) && config.fetchOptions.errorPolicy === `none`) {
    const clientResponse = result._tag === `Batch` ? { ...result.executionResults, ...clientResponseBase } : {
      ...result.executionResult,
      ...clientResponseBase
    };
    return new ClientError(clientResponse, {
      query: input.request._tag === `Single` ? input.request.document.expression : input.request.query,
      variables: input.request.variables
    });
  }
  switch (result._tag) {
    case `Single`:
      return {
        ...clientResponseBase,
        ...executionResultClientResponseFields(config)(result.executionResult)
      };
    case `Batch`:
      return {
        ...clientResponseBase,
        data: result.executionResults.map(executionResultClientResponseFields(config))
      };
    default:
      casesExhausted(result);
  }
};
const executionResultClientResponseFields = ($params) => (executionResult) => {
  return {
    extensions: executionResult.extensions,
    data: executionResult.data,
    errors: $params.fetchOptions.errorPolicy === `all` ? executionResult.errors : void 0
  };
};
const parseResultFromResponse = async (response, jsonSerializer) => {
  const contentType = response.headers.get(CONTENT_TYPE_HEADER);
  const text = await response.text();
  if (contentType && isGraphQLContentType(contentType)) {
    return parseGraphQLExecutionResult(jsonSerializer.parse(text));
  } else {
    return parseGraphQLExecutionResult(text);
  }
};
const createFetcher = (method) => async (params) => {
  const headers = new Headers(params.headers);
  let searchParams = null;
  let body = void 0;
  if (!headers.has(ACCEPT_HEADER)) {
    headers.set(ACCEPT_HEADER, [CONTENT_TYPE_GQL, CONTENT_TYPE_JSON].join(`, `));
  }
  if (method === `POST`) {
    const $jsonSerializer = params.fetchOptions.jsonSerializer ?? defaultJsonSerializer;
    body = $jsonSerializer.stringify(buildBody(params));
    if (typeof body === `string` && !headers.has(CONTENT_TYPE_HEADER)) {
      headers.set(CONTENT_TYPE_HEADER, CONTENT_TYPE_JSON);
    }
  } else {
    searchParams = buildQueryParams(params);
  }
  const init = { method, headers, body, ...params.fetchOptions };
  let url = new URL(params.url);
  let initResolved = init;
  if (params.middleware) {
    const result = await Promise.resolve(params.middleware({
      ...init,
      url: params.url,
      operationName: params.request._tag === `Single` ? params.request.document.operationName : void 0,
      variables: params.request.variables
    }));
    const { url: urlNew, ...initNew } = result;
    url = new URL(urlNew);
    initResolved = initNew;
  }
  if (searchParams) {
    searchParams.forEach((value, name) => {
      url.searchParams.append(name, value);
    });
  }
  const $fetch = params.fetch ?? fetch;
  return await $fetch(url, initResolved);
};
const buildBody = (params) => {
  switch (params.request._tag) {
    case `Single`:
      return {
        query: params.request.document.expression,
        variables: params.request.variables,
        operationName: params.request.document.operationName
      };
    case `Batch`:
      return zip(params.request.query, params.request.variables ?? []).map(([query, variables]) => ({
        query,
        variables
      }));
    default:
      throw casesExhausted(params.request);
  }
};
const buildQueryParams = (params) => {
  const $jsonSerializer = params.fetchOptions.jsonSerializer ?? defaultJsonSerializer;
  const searchParams = new URLSearchParams();
  switch (params.request._tag) {
    case `Single`: {
      searchParams.append(`query`, cleanQuery(params.request.document.expression));
      if (params.request.variables) {
        searchParams.append(`variables`, $jsonSerializer.stringify(params.request.variables));
      }
      if (params.request.document.operationName) {
        searchParams.append(`operationName`, params.request.document.operationName);
      }
      return searchParams;
    }
    case `Batch`: {
      const variablesSerialized = params.request.variables?.map((v) => $jsonSerializer.stringify(v)) ?? [];
      const queriesCleaned = params.request.query.map(cleanQuery);
      const payload = zip(queriesCleaned, variablesSerialized).map(([query, variables]) => ({
        query,
        variables
      }));
      searchParams.append(`query`, $jsonSerializer.stringify(payload));
      return searchParams;
    }
    default:
      throw casesExhausted(params.request);
  }
};
class GraphQLClient {
  url;
  requestConfig;
  constructor(url, requestConfig = {}) {
    this.url = url;
    this.requestConfig = requestConfig;
  }
  /**
   * Send a GraphQL query to the server.
   */
  rawRequest = async (...args) => {
    const [queryOrOptions, variables, requestHeaders] = args;
    const rawRequestOptions = parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
    const { headers, fetch: fetch2 = globalThis.fetch, method = `POST`, requestMiddleware, responseMiddleware, excludeOperationName, ...fetchOptions } = this.requestConfig;
    const { url } = this;
    if (rawRequestOptions.signal !== void 0) {
      fetchOptions.signal = rawRequestOptions.signal;
    }
    const document = analyzeDocument(rawRequestOptions.query, excludeOperationName);
    const response = await runRequest({
      url,
      request: {
        _tag: `Single`,
        document,
        variables: rawRequestOptions.variables
      },
      headers: {
        ...HeadersInitToPlainObject(callOrIdentity(headers)),
        ...HeadersInitToPlainObject(rawRequestOptions.requestHeaders)
      },
      fetch: fetch2,
      method,
      fetchOptions,
      middleware: requestMiddleware
    });
    if (responseMiddleware) {
      await responseMiddleware(response, {
        operationName: document.operationName,
        variables,
        url: this.url
      });
    }
    if (response instanceof Error) {
      throw response;
    }
    return response;
  };
  async request(documentOrOptions, ...variablesAndRequestHeaders) {
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    const requestOptions = parseRequestArgs(documentOrOptions, variables, requestHeaders);
    const { headers, fetch: fetch2 = globalThis.fetch, method = `POST`, requestMiddleware, responseMiddleware, excludeOperationName, ...fetchOptions } = this.requestConfig;
    const { url } = this;
    if (requestOptions.signal !== void 0) {
      fetchOptions.signal = requestOptions.signal;
    }
    const analyzedDocument = analyzeDocument(requestOptions.document, excludeOperationName);
    const response = await runRequest({
      url,
      request: {
        _tag: `Single`,
        document: analyzedDocument,
        variables: requestOptions.variables
      },
      headers: {
        ...HeadersInitToPlainObject(callOrIdentity(headers)),
        ...HeadersInitToPlainObject(requestOptions.requestHeaders)
      },
      fetch: fetch2,
      method,
      fetchOptions,
      middleware: requestMiddleware
    });
    if (responseMiddleware) {
      await responseMiddleware(response, {
        operationName: analyzedDocument.operationName,
        variables: requestOptions.variables,
        url: this.url
      });
    }
    if (response instanceof Error) {
      throw response;
    }
    return response.data;
  }
  async batchRequests(documentsOrOptions, requestHeaders) {
    const batchRequestOptions = parseBatchRequestArgs(documentsOrOptions, requestHeaders);
    const { headers, excludeOperationName, ...fetchOptions } = this.requestConfig;
    if (batchRequestOptions.signal !== void 0) {
      fetchOptions.signal = batchRequestOptions.signal;
    }
    const analyzedDocuments = batchRequestOptions.documents.map(({ document }) => analyzeDocument(document, excludeOperationName));
    const expressions = analyzedDocuments.map(({ expression }) => expression);
    const hasMutations = analyzedDocuments.some(({ isMutation }) => isMutation);
    const variables = batchRequestOptions.documents.map(({ variables: variables2 }) => variables2);
    const response = await runRequest({
      url: this.url,
      request: {
        _tag: `Batch`,
        operationName: void 0,
        query: expressions,
        hasMutations,
        variables
      },
      headers: {
        ...HeadersInitToPlainObject(callOrIdentity(headers)),
        ...HeadersInitToPlainObject(batchRequestOptions.requestHeaders)
      },
      fetch: this.requestConfig.fetch ?? globalThis.fetch,
      method: this.requestConfig.method || `POST`,
      fetchOptions,
      middleware: this.requestConfig.requestMiddleware
    });
    if (this.requestConfig.responseMiddleware) {
      await this.requestConfig.responseMiddleware(response, {
        operationName: void 0,
        variables,
        url: this.url
      });
    }
    if (response instanceof Error) {
      throw response;
    }
    return response.data;
  }
  setHeaders(headers) {
    this.requestConfig.headers = headers;
    return this;
  }
  /**
   * Attach a header to the client. All subsequent requests will have this header.
   */
  setHeader(key, value) {
    const { headers } = this.requestConfig;
    if (headers) {
      headers[key] = value;
    } else {
      this.requestConfig.headers = { [key]: value };
    }
    return this;
  }
  /**
   * Change the client endpoint. All subsequent requests will send to this endpoint.
   */
  setEndpoint(value) {
    this.url = value;
    return this;
  }
}
const parseRequestArgs = (documentOrOptions, variables, requestHeaders) => {
  return documentOrOptions.document ? documentOrOptions : {
    document: documentOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
const isConfig = (props) => {
  return typeof props === "object" && props !== null && "apis" in props && "basedAppsAPI" in props && "graphs" in props;
};
const createConfig = (props) => {
  const { publicClient, walletClient, beaconchainUrl, extendedConfig } = configArgsSchema.parse(props);
  const chain = publicClient.chain.id;
  const hasAPIKey = Boolean(extendedConfig?.subgraph?.apiKey);
  const defaultBamGraphEndpoint = hasAPIKey ? bam_paid_graph_endpoints[chain] : bam_graph_endpoints[chain];
  const bapEndpoint = extendedConfig?.subgraph?.url || defaultBamGraphEndpoint;
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${extendedConfig?.subgraph?.apiKey}`
    }
  };
  const bamGraphQLClient = new GraphQLClient(bapEndpoint, hasAPIKey ? requestConfig : void 0);
  const apis = {
    beacon: createBeaconChainAPI(beaconchainUrl),
    bam: createBAMQueries(bamGraphQLClient)
  };
  const bappContractAddress = extendedConfig?.contract || contracts[chain].bapp;
  return {
    apis,
    basedAppsAPI: createBasedAppsAPI(apis),
    contracts: {
      bapp: {
        read: createReader({
          abi: BAppABI,
          contractAddress: bappContractAddress,
          publicClient
        }),
        write: createWriter({
          abi: BAppABI,
          contractAddress: bappContractAddress,
          publicClient,
          walletClient
        }),
        address: bappContractAddress
      }
    },
    graphs: {
      bam: {
        client: bamGraphQLClient,
        endpoint: bapEndpoint
      }
    }
  };
};
const TestnetV4GetterABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "AddressIsWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "CallerNotOwnerWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotWhitelisted",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "CallerNotWhitelistedWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterAlreadyEnabled",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterDoesNotExists",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterIsLiquidated",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterNotLiquidatable",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptyPublicKeysList",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimitWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeExceedsIncreaseLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeIncreaseNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectValidatorState",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "IncorrectValidatorStateWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidContractAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidOperatorIdsLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidWhitelistAddressesLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "InvalidWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxValueExceeded",
    type: "error"
  },
  {
    inputs: [],
    name: "NewBlockPeriodIsBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "NoFeeDeclared",
    type: "error"
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorsListNotUnique",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "TargetModuleDoesNotExist",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "moduleId",
        type: "uint8"
      }
    ],
    name: "TargetModuleDoesNotExistWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenTransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UnsortedOperatorsList",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorAlreadyExistsWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "getBurnRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLiquidationThresholdPeriod",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumOperatorFee",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumLiquidationCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkValidatorsCount",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorDeclaredFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64"
      }
    ],
    name: "getOperatorEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOperatorFeeIncreaseLimit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOperatorFeePeriods",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "getValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getValidatorsPerOperatorLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address",
        name: "whitelistedAddress",
        type: "address"
      }
    ],
    name: "getWhitelistedOperators",
    outputs: [
      {
        internalType: "uint64[]",
        name: "whitelistedOperatorIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISSVViews",
        name: "ssvNetwork_",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressToCheck",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "operatorId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "isAddressWhitelistedInWhitelistingContract",
    outputs: [
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "isLiquidatable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "isLiquidated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "isWhitelistingContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "ssvNetwork",
    outputs: [
      {
        internalType: "contract ISSVViews",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
const MainnetV4SetterABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "AddressIsWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "CallerNotOwnerWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotWhitelisted",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "CallerNotWhitelistedWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterAlreadyEnabled",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterDoesNotExists",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterIsLiquidated",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterNotLiquidatable",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptyPublicKeysList",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimitWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeExceedsIncreaseLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeIncreaseNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectValidatorState",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "IncorrectValidatorStateWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidContractAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidOperatorIdsLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidWhitelistAddressesLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "InvalidWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxValueExceeded",
    type: "error"
  },
  {
    inputs: [],
    name: "NewBlockPeriodIsBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "NoFeeDeclared",
    type: "error"
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorsListNotUnique",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "TargetModuleDoesNotExist",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "moduleId",
        type: "uint8"
      }
    ],
    name: "TargetModuleDoesNotExistWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenTransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UnsortedOperatorsList",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorAlreadyExistsWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterDeposited",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterLiquidated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterReactivated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "DeclareOperatorFeePeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "ExecuteOperatorFeePeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipientAddress",
        type: "address"
      }
    ],
    name: "FeeRecipientAddressUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "LiquidationThresholdPeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "MinimumLiquidationCollateralUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum SSVModules",
        name: "moduleId",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "address",
        name: "moduleAddress",
        type: "address"
      }
    ],
    name: "ModuleUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      }
    ],
    name: "NetworkEarningsWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256"
      }
    ],
    name: "NetworkFeeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "OperatorAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "OperatorFeeDeclarationCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "OperatorFeeDeclared",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "OperatorFeeExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "OperatorFeeIncreaseLimitUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "maxFee",
        type: "uint64"
      }
    ],
    name: "OperatorMaximumFeeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "OperatorMultipleWhitelistRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "OperatorMultipleWhitelistUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "toPrivate",
        type: "bool"
      }
    ],
    name: "OperatorPrivacyStatusUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "OperatorRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "address",
        name: "whitelisted",
        type: "address"
      }
    ],
    name: "OperatorWhitelistUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "address",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "OperatorWhitelistingContractUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "OperatorWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "shares",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ValidatorAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorExited",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ValidatorRemoved",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "publicKeys",
        type: "bytes[]"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "bulkExitValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "publicKeys",
        type: "bytes[]"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "bytes[]",
        name: "sharesData",
        type: "bytes[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "bulkRegisterValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "publicKeys",
        type: "bytes[]"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "bulkRemoveValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "cancelDeclaredOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "declareOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "executeOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "exitValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "version",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address"
      },
      {
        internalType: "contract ISSVOperators",
        name: "ssvOperators_",
        type: "address"
      },
      {
        internalType: "contract ISSVClusters",
        name: "ssvClusters_",
        type: "address"
      },
      {
        internalType: "contract ISSVDAO",
        name: "ssvDAO_",
        type: "address"
      },
      {
        internalType: "contract ISSVViews",
        name: "ssvViews_",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "minimumBlocksBeforeLiquidation_",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "minimumLiquidationCollateral_",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "validatorsPerOperatorLimit_",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "declareOperatorFeePeriod_",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "executeOperatorFeePeriod_",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "operatorMaxFeeIncrease_",
        type: "uint64"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "reactivate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "reduceOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "setPrivate",
        type: "bool"
      }
    ],
    name: "registerOperator",
    outputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "bytes",
        name: "sharesData",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "registerValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "removeOperatorsWhitelistingContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "removeOperatorsWhitelists",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "removeValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipientAddress",
        type: "address"
      }
    ],
    name: "setFeeRecipientAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "setOperatorsPrivateUnchecked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "setOperatorsPublicUnchecked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "contract ISSVWhitelistingContract",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "setOperatorsWhitelistingContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "setOperatorsWhitelists",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "timeInSeconds",
        type: "uint64"
      }
    ],
    name: "updateDeclareOperatorFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "timeInSeconds",
        type: "uint64"
      }
    ],
    name: "updateExecuteOperatorFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "blocks",
        type: "uint64"
      }
    ],
    name: "updateLiquidationThresholdPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "maxFee",
        type: "uint64"
      }
    ],
    name: "updateMaximumOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "updateMinimumLiquidationCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum SSVModules",
        name: "moduleId",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "moduleAddress",
        type: "address"
      }
    ],
    name: "updateModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "updateNetworkFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "percentage",
        type: "uint64"
      }
    ],
    name: "updateOperatorFeeIncreaseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "withdrawAllOperatorEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawNetworkEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawOperatorEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const TokenABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const paramsToArray = ({
  params,
  abiFunction
}) => {
  return stringifyBigints(
    abiFunction.inputs.reduce(
      (acc, param) => {
        if (param.name && !isUndefined(params[param.name])) {
          return [...acc, params[param.name]];
        } else {
          console.error(`Missing argument for ${param}`);
        }
        return acc;
      },
      []
    )
  );
};
const ABIS = [TokenABI, MainnetV4SetterABI, TestnetV4GetterABI];
const createWriter = ({
  abi,
  publicClient,
  walletClient,
  contractAddress
}) => {
  const writeFnsMainnet = abi.filter(
    (item) => item.type === "function" && (item.stateMutability === "nonpayable" || item.stateMutability === "payable")
  );
  return Object.fromEntries(
    writeFnsMainnet.map((fn) => {
      const simulate = async (options) => publicClient.simulateContract({
        ...options,
        address: contractAddress,
        abi,
        functionName: fn.name,
        args: paramsToArray({ params: options.args, abiFunction: fn }),
        account: walletClient.account
      });
      const func = async (options) => {
        const { request } = await simulate(options);
        const hash = await walletClient.writeContract(request);
        return {
          hash,
          wait: () => publicClient.waitForTransactionReceipt({ hash }).then((receipt) => ({
            ...receipt,
            events: receipt.logs.reduce(
              (acc, log) => {
                try {
                  const event = decodeEventLog({
                    abi,
                    data: log.data,
                    topics: log.topics
                  });
                  acc.push(event);
                } catch {
                  for (const eventAbi of ABIS) {
                    tryCatch$1(() => {
                      const event = decodeEventLog({
                        abi: eventAbi,
                        data: log.data,
                        topics: log.topics
                      });
                      acc.push(event);
                    });
                  }
                }
                return acc;
              },
              []
            )
          }))
        };
      };
      func.simulate = simulate;
      return [fn.name, func];
    })
  );
};
const createReader = ({
  abi,
  publicClient,
  contractAddress
}) => {
  const readFnsMainnet = abi.filter(
    (item) => item.type === "function" && (item.stateMutability === "view" || item.stateMutability === "pure")
  );
  return Object.fromEntries(
    readFnsMainnet.map((fn) => {
      const func = async (args) => {
        return await publicClient.readContract({
          abi,
          address: contractAddress,
          functionName: fn.name,
          args: paramsToArray({ params: args, abiFunction: fn })
        });
      };
      return [fn.name, func];
    })
  );
};
const calculateCoefficientsSum = (coefficients) => coefficients.reduce((acc, coeff) => acc + coeff.coefficient, 0);
const fillTokenWeightsMap = (strategy, coefficients) => new Map(
  coefficients.map((coeff) => [
    coeff.token,
    strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coeff.token)?.weight || 0
  ])
);
const calculateWeightTotals = (strategy, coefficients, validatorCoefficient = 0) => coefficients.reduce(
  (sum, coefficient) => {
    const tokenWeightsMap = fillTokenWeightsMap(strategy, coefficients);
    return sum + (tokenWeightsMap.get(coefficient.token) || 0) * coefficient.coefficient;
  },
  (strategy.validatorBalanceWeight || 0) * validatorCoefficient
);
const calculateWeightedRatioSum = (strategy, coefficients, validatorCoefficient) => {
  let weightCoeffRatioSum = 0;
  if (!strategy.validatorBalanceWeight) return weightCoeffRatioSum;
  const tokenWeightsMap = fillTokenWeightsMap(strategy, coefficients);
  if (Array.from(tokenWeightsMap.values()).some((item) => item == 0)) return weightCoeffRatioSum;
  weightCoeffRatioSum = coefficients.reduce(
    (sum, coeff) => sum + coeff.coefficient / (tokenWeightsMap.get(coeff.token) || 1),
    validatorCoefficient / strategy.validatorBalanceWeight
  );
  return weightCoeffRatioSum;
};
const calculateWeightedLogSum = (strategy, coefficients, validatorCoefficient) => {
  let weightedLogSum = 0;
  if (!strategy.validatorBalanceWeight) return weightedLogSum;
  const tokenWeightsMap = fillTokenWeightsMap(strategy, coefficients);
  if (Array.from(tokenWeightsMap.values()).some((item) => item == 0)) return weightedLogSum;
  weightedLogSum = coefficients.reduce(
    (acc, coeff) => acc + coeff.coefficient * Math.log(tokenWeightsMap.get(coeff.token) || 0),
    validatorCoefficient * Math.log(strategy.validatorBalanceWeight)
  );
  return weightedLogSum;
};
const calcArithmeticStrategyWeights = (strategyTokenWeights, { coefficients, validatorCoefficient = 0 }) => {
  const strategyWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const totalCoefficient = calculateCoefficientsSum(coefficients);
    const totalWeight = calculateWeightTotals(strategy, coefficients, validatorCoefficient);
    return weightMap.set(strategy.id, totalWeight / totalCoefficient);
  }, /* @__PURE__ */ new Map());
  return strategyWeights;
};
const calcHarmonicStrategyWeights = (strategyTokenWeights, { coefficients, validatorCoefficient = 0 }) => {
  const coeffSum = calculateCoefficientsSum(coefficients);
  const unnormalizedWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const denom = calculateWeightedRatioSum(strategy, coefficients, validatorCoefficient);
    const finalWeight = denom != 0 ? coeffSum / denom : 0;
    return weightMap.set(strategy.id, finalWeight);
  }, /* @__PURE__ */ new Map());
  const weightSum = Array.from(unnormalizedWeights.values()).reduce(
    (sum, weight) => sum + weight,
    0
  );
  const normalizedWeights = /* @__PURE__ */ new Map();
  for (const [id, weight] of unnormalizedWeights.entries()) {
    normalizedWeights.set(id, weight / weightSum);
  }
  return normalizedWeights;
};
const calcGeometricStrategyWeights = (strategyTokenWeights, { coefficients, validatorCoefficient = 0 }) => {
  const unnormalizedWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const totalCoefficient = calculateCoefficientsSum(coefficients);
    const logSum = calculateWeightedLogSum(strategy, coefficients, validatorCoefficient);
    const finalWeight = logSum != 0 ? Math.exp(logSum / totalCoefficient) : 0;
    return weightMap.set(strategy.id, finalWeight);
  }, /* @__PURE__ */ new Map());
  const weightSum = Array.from(unnormalizedWeights.values()).reduce(
    (sum, weight) => sum + weight,
    0
  );
  const normalizedWeights = /* @__PURE__ */ new Map();
  for (const [id, weight] of unnormalizedWeights.entries()) {
    normalizedWeights.set(id, weight / weightSum);
  }
  return normalizedWeights;
};
const utils = {
  calcArithmeticStrategyWeights,
  calcGeometricStrategyWeights,
  calcHarmonicStrategyWeights
};
class BasedAppsSDK {
  core;
  api;
  contracts;
  utils;
  constructor(props) {
    this.core = isConfig(props) ? props : createConfig(props);
    this.api = {
      ...this.core.basedAppsAPI,
      ...this.core.apis.bam
    };
    this.utils = utils;
    this.contracts = this.core.contracts;
  }
}
export {
  BasedAppsSDK,
  bam_graph_endpoints,
  bam_paid_graph_endpoints,
  k as chainIds,
  j as chains,
  contracts,
  createBAMQueries,
  createBasedAppsAPI,
  createBeaconChainAPI,
  createConfig,
  createReader,
  createSSVAPI,
  createWriter,
  l as globals,
  h as hoodi,
  isConfig,
  n as networks,
  r as registerValidatorsByClusterSizeLimits
};
