export declare const BAppABI: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppAlreadyOptedIn";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppDoesNotSupportInterface";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppNotOptedIn";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppOptInFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BAppSlashingFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DelegationAlreadyExists";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DelegationDoesNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DelegationExistsWithSameValue";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExceedingMaxShares";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExceedingPercentageUpdate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FeeAlreadySet";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientLiquidity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAccountGeneration";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAmount";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "caller";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "expectedOwner";
        readonly type: "address";
    }];
    readonly name: "InvalidBAppOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidMaxFeeIncrement";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidPercentageIncrement";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidStrategyFee";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "caller";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "expectedOwner";
        readonly type: "address";
    }];
    readonly name: "InvalidStrategyOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoPendingFeeUpdate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoPendingObligationUpdate";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NoPendingWithdrawal";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ObligationAlreadySet";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ObligationHasNotBeenCreated";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RequestTimeExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SlashingDisabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "moduleId";
        readonly type: "uint8";
    }];
    readonly name: "TargetModuleDoesNotExist";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TimelockNotElapsed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenAlreadyAddedToBApp";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenNotSupportedByBApp";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "slot";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WithdrawTransferFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WithdrawalsDisabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroAddressNotAllowed";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "AccountMetadataURIUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "BAppMetadataURIUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }, {
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32[]";
        readonly name: "obligationPercentages";
        readonly type: "uint32[]";
    }];
    readonly name: "BAppOptedInByStrategy";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32[]";
        readonly name: "sharedRiskLevel";
        readonly type: "uint32[]";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "BAppRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "sharedRiskLevel";
            readonly type: "uint32";
        }];
        readonly indexed: false;
        readonly internalType: "struct ICore.TokenConfig[]";
        readonly name: "tokenConfigs";
        readonly type: "tuple[]";
    }];
    readonly name: "BAppTokensUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "delegator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "DelegationCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "delegator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "DelegationRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "delegator";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "DelegationUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "disabledFeatures";
        readonly type: "uint32";
    }];
    readonly name: "DisabledFeaturesUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "feeExpireTime";
        readonly type: "uint32";
    }];
    readonly name: "FeeExpireTimeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "feeTimelockPeriod";
        readonly type: "uint32";
    }];
    readonly name: "FeeTimelockPeriodUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "version";
        readonly type: "uint64";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "newMaxFeeIncrement";
        readonly type: "uint32";
    }];
    readonly name: "MaxFeeIncrementSet";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "enum SSVCoreModules";
        readonly name: "moduleId";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "moduleAddress";
        readonly type: "address";
    }];
    readonly name: "ModuleUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "ObligationCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "obligationExpireTime";
        readonly type: "uint32";
    }];
    readonly name: "ObligationExpireTimeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "obligationTimelockPeriod";
        readonly type: "uint32";
    }];
    readonly name: "ObligationTimelockPeriodUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "ObligationUpdateProposed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "ObligationUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferStarted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "SlashingFundWithdrawn";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "fee";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "StrategyCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "StrategyDeposit";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "proposedFee";
        readonly type: "uint32";
    }];
    readonly name: "StrategyFeeUpdateProposed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "newFee";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isFast";
        readonly type: "bool";
    }];
    readonly name: "StrategyFeeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "maxFeeIncrement";
        readonly type: "uint32";
    }];
    readonly name: "StrategyMaxFeeIncrementUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly name: "StrategyMaxSharesUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "StrategyMetadataURIUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "StrategySlashed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isFast";
        readonly type: "bool";
    }];
    readonly name: "StrategyWithdrawal";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "StrategyWithdrawalProposed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "tokenUpdateTimelockPeriod";
        readonly type: "uint32";
    }];
    readonly name: "TokenUpdateTimelockPeriodUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "Upgraded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "withdrawalExpireTime";
        readonly type: "uint32";
    }];
    readonly name: "WithdrawalExpireTimeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "withdrawalTimelockPeriod";
        readonly type: "uint32";
    }];
    readonly name: "WithdrawalTimelockPeriodUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "acceptOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }];
    readonly name: "accountBAppStrategy";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "bAppTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "currentValue";
        readonly type: "uint32";
    }, {
        readonly internalType: "bool";
        readonly name: "isSet";
        readonly type: "bool";
    }, {
        readonly internalType: "uint32";
        readonly name: "pendingValue";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "effectTime";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "obligationPercentage";
        readonly type: "uint32";
    }];
    readonly name: "createObligation";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "fee";
        readonly type: "uint32";
    }, {
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "createStrategy";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "delegateBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "delegations";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "depositERC20";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }];
    readonly name: "depositETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disabledFeatures";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "ethAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "feeExpireTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "feeTimelockPeriod";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }];
    readonly name: "feeUpdateRequests";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "requestTime";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }];
    readonly name: "finalizeFeeUpdate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "finalizeUpdateObligation";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "finalizeWithdrawal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }];
    readonly name: "finalizeWithdrawalETH";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum SSVCoreModules";
        readonly name: "moduleId";
        readonly type: "uint8";
    }];
    readonly name: "getModuleAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getSlashableBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "slashableBalance";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IBasedAppManager";
        readonly name: "ssvBasedAppManger_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IStrategyManager";
        readonly name: "ssvStrategyManager_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IProtocolManager";
        readonly name: "protocolManager_";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxShares";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "feeTimelockPeriod";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "feeExpireTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "withdrawalTimelockPeriod";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "withdrawalExpireTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "obligationTimelockPeriod";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "obligationExpireTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "tokenUpdateTimelockPeriod";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxFeeIncrement";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "disabledFeatures";
            readonly type: "uint32";
        }];
        readonly internalType: "struct ProtocolStorageLib.Data";
        readonly name: "config";
        readonly type: "tuple";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "maxFeeIncrement";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "maxPercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "maxShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "obligationExpireTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }];
    readonly name: "obligationRequests";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "requestTime";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "obligationTimelockPeriod";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "obligations";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }, {
        readonly internalType: "bool";
        readonly name: "isSet";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint32[]";
        readonly name: "obligationPercentages";
        readonly type: "uint32[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "optInToBApp";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "ownedStrategies";
    readonly outputs: readonly [{
        readonly internalType: "uint32[]";
        readonly name: "strategyIds";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pendingOwner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "proposedFee";
        readonly type: "uint32";
    }];
    readonly name: "proposeFeeUpdate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "obligationPercentage";
        readonly type: "uint32";
    }];
    readonly name: "proposeUpdateObligation";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "proposeWithdrawal";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "proposeWithdrawalETH";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "proposedFee";
        readonly type: "uint32";
    }];
    readonly name: "reduceFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint32[]";
        readonly name: "sharedRiskLevels";
        readonly type: "uint32[]";
    }, {
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "registerBApp";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }];
    readonly name: "registeredBApps";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "isRegistered";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "removeDelegatedBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "slash";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "slashingFund";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }];
    readonly name: "strategies";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "strategyOwner";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "fee";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "strategyAccountShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "strategyGeneration";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "strategyTotalBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "strategyTotalShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "tokenUpdateTimelockPeriod";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "delegator";
        readonly type: "address";
    }];
    readonly name: "totalDelegatedPercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "updateAccountMetadataURI";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "updateBAppMetadataURI";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "sharedRiskLevel";
            readonly type: "uint32";
        }];
        readonly internalType: "struct ICore.TokenConfig[]";
        readonly name: "tokenConfigs";
        readonly type: "tuple[]";
    }];
    readonly name: "updateBAppsTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "percentage";
        readonly type: "uint32";
    }];
    readonly name: "updateDelegatedBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "disabledFeatures";
        readonly type: "uint32";
    }];
    readonly name: "updateDisabledFeatures";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateFeeExpireTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateFeeTimelockPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateMaxFeeIncrement";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "updateMaxShares";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum SSVCoreModules[]";
        readonly name: "moduleIds";
        readonly type: "uint8[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "moduleAddresses";
        readonly type: "address[]";
    }];
    readonly name: "updateModule";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateObligationExpireTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateObligationTimelockPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "string";
        readonly name: "metadataURI";
        readonly type: "string";
    }];
    readonly name: "updateStrategyMetadataURI";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateTokenUpdateTimelockPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateWithdrawalExpireTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "value";
        readonly type: "uint32";
    }];
    readonly name: "updateWithdrawalTimelockPeriod";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newImplementation";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "withdrawETHSlashingFund";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "withdrawSlashingFund";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "withdrawalExpireTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "withdrawalRequests";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "requestTime";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "withdrawalTimelockPeriod";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
