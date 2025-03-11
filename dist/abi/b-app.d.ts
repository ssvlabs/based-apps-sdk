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
    readonly name: "BAppNotOptedIn";
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
    readonly name: "EmptyTokenList";
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
    readonly name: "InvalidPercentage";
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
    readonly name: "LengthsNotMatching";
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
    readonly name: "NoPendingWithdrawalETH";
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
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RequestTimeExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SharedRiskLevelAlreadySet";
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
    readonly inputs: readonly [];
    readonly name: "TokenIsUsedByTheBApp";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenNoTSupportedByBApp";
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
        readonly name: "bAppAddress";
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
        readonly name: "bAppAddress";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
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
        readonly name: "bAppAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32[]";
        readonly name: "sharedRiskLevels";
        readonly type: "uint32[]";
    }];
    readonly name: "BAppTokensCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "bAppAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32[]";
        readonly name: "sharedRiskLevels";
        readonly type: "uint32[]";
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
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isFast";
        readonly type: "bool";
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
    readonly name: "OwnershipTransferred";
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
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "fee";
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
        readonly name: "fee";
        readonly type: "uint32";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "oldFee";
        readonly type: "uint32";
    }];
    readonly name: "StrategyFeeUpdated";
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
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "Upgraded";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "ETH_ADDRESS";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "FEE_EXPIRE_TIME";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "FEE_TIMELOCK_PERIOD";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_PERCENTAGE";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "OBLIGATION_EXPIRE_TIME";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "OBLIGATION_TIMELOCK_PERIOD";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
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
    readonly name: "WITHDRAWAL_EXPIRE_TIME";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "WITHDRAWAL_TIMELOCK_PERIOD";
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
        readonly name: "strategyId";
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
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint32[]";
        readonly name: "sharedRiskLevels";
        readonly type: "uint32[]";
    }];
    readonly name: "addTokensToBApp";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }];
    readonly name: "bAppOwners";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
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
        readonly name: "value";
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
        readonly name: "account";
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
        readonly name: "delegator";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "delegations";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "percentage";
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
    readonly name: "fastUpdateObligation";
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
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "fastWithdrawERC20";
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
    readonly name: "fastWithdrawETH";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "_maxFeeIncrement";
        readonly type: "uint32";
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
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
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
        readonly name: "account";
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
    }];
    readonly name: "strategies";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "fee";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "feeProposed";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "feeRequestTime";
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
    readonly name: "strategyTokenBalances";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
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
        readonly name: "totalPercentage";
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
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
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
        readonly internalType: "address";
        readonly name: "bApp";
        readonly type: "address";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint32[]";
        readonly name: "sharedRiskLevels";
        readonly type: "uint32[]";
    }];
    readonly name: "updateBAppTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
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
        readonly internalType: "uint32";
        readonly name: "strategyId";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "usedTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "bAppsCounter";
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
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "requestTime";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
