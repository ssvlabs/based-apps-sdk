import { Address } from 'viem';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigDecimal: {
        input: string;
        output: string;
    };
    BigInt: {
        input: string;
        output: string;
    };
    Bytes: {
        input: Address;
        output: Address;
    };
    /**
     * 8 bytes signed integer
     *
     */
    Int8: {
        input: any;
        output: any;
    };
    /**
     * A string representation of microseconds UNIX timestamp (16 digits)
     *
     */
    Timestamp: {
        input: any;
        output: any;
    };
};
export type AccountMetadataUriUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['Bytes']['input']>;
    account_contains?: InputMaybe<Scalars['Bytes']['input']>;
    account_gt?: InputMaybe<Scalars['Bytes']['input']>;
    account_gte?: InputMaybe<Scalars['Bytes']['input']>;
    account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    account_lt?: InputMaybe<Scalars['Bytes']['input']>;
    account_lte?: InputMaybe<Scalars['Bytes']['input']>;
    account_not?: InputMaybe<Scalars['Bytes']['input']>;
    account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    and?: InputMaybe<Array<InputMaybe<AccountMetadataUriUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<AccountMetadataUriUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum AccountMetadataUriUpdated_OrderBy {
    Account = "account",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    MetadataUri = "metadataURI",
    TransactionHash = "transactionHash"
}
export type Account_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
    bApps_?: InputMaybe<BApp_Filter>;
    clusters_?: InputMaybe<Cluster_Filter>;
    delegators_?: InputMaybe<Delegation_Filter>;
    deposits_?: InputMaybe<StrategyUserBalance_Filter>;
    feeRecipient?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    feeRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nonce?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operators_?: InputMaybe<Operator_Filter>;
    or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
    receivers_?: InputMaybe<Delegation_Filter>;
    strategies_?: InputMaybe<Strategy_Filter>;
    totalDelegatedPercentage?: InputMaybe<Scalars['BigInt']['input']>;
    totalDelegatedPercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalDelegatedPercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalDelegatedPercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalDelegatedPercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalDelegatedPercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalDelegatedPercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalDelegatedPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validators_?: InputMaybe<Validator_Filter>;
};
export declare enum Account_OrderBy {
    BApps = "bApps",
    Clusters = "clusters",
    Delegators = "delegators",
    Deposits = "deposits",
    FeeRecipient = "feeRecipient",
    Id = "id",
    MetadataUri = "metadataURI",
    Nonce = "nonce",
    Operators = "operators",
    Receivers = "receivers",
    Strategies = "strategies",
    TotalDelegatedPercentage = "totalDelegatedPercentage",
    ValidatorCount = "validatorCount",
    Validators = "validators"
}
export declare enum Aggregation_Interval {
    Day = "day",
    Hour = "hour"
}
export type BAppConstants_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    _maxFeeIncrement?: InputMaybe<Scalars['BigInt']['input']>;
    _maxFeeIncrement_gt?: InputMaybe<Scalars['BigInt']['input']>;
    _maxFeeIncrement_gte?: InputMaybe<Scalars['BigInt']['input']>;
    _maxFeeIncrement_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    _maxFeeIncrement_lt?: InputMaybe<Scalars['BigInt']['input']>;
    _maxFeeIncrement_lte?: InputMaybe<Scalars['BigInt']['input']>;
    _maxFeeIncrement_not?: InputMaybe<Scalars['BigInt']['input']>;
    _maxFeeIncrement_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<BAppConstants_Filter>>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<BAppConstants_Filter>>>;
    totalAccounts?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAccounts_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalBApps?: InputMaybe<Scalars['BigInt']['input']>;
    totalBApps_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalBApps_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalBApps_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalBApps_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalBApps_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalBApps_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalBApps_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalStrategies?: InputMaybe<Scalars['BigInt']['input']>;
    totalStrategies_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalStrategies_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalStrategies_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalStrategies_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalStrategies_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalStrategies_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalStrategies_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum BAppConstants_OrderBy {
    MaxFeeIncrement = "_maxFeeIncrement",
    Id = "id",
    TotalAccounts = "totalAccounts",
    TotalBApps = "totalBApps",
    TotalStrategies = "totalStrategies"
}
export type BAppMetadataUriUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BAppMetadataUriUpdated_Filter>>>;
    bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<BAppMetadataUriUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum BAppMetadataUriUpdated_OrderBy {
    BAppAddress = "bAppAddress",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    MetadataUri = "metadataURI",
    TransactionHash = "transactionHash"
}
export type BAppOptedInByStrategy_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BAppOptedInByStrategy_Filter>>>;
    bApp?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    data?: InputMaybe<Scalars['Bytes']['input']>;
    data_contains?: InputMaybe<Scalars['Bytes']['input']>;
    data_gt?: InputMaybe<Scalars['Bytes']['input']>;
    data_gte?: InputMaybe<Scalars['Bytes']['input']>;
    data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    data_lt?: InputMaybe<Scalars['Bytes']['input']>;
    data_lte?: InputMaybe<Scalars['Bytes']['input']>;
    data_not?: InputMaybe<Scalars['Bytes']['input']>;
    data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    obligationPercentages?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligationPercentages_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligationPercentages_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligationPercentages_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligationPercentages_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligationPercentages_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<BAppOptedInByStrategy_Filter>>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum BAppOptedInByStrategy_OrderBy {
    BApp = "bApp",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Data = "data",
    Id = "id",
    ObligationPercentages = "obligationPercentages",
    StrategyId = "strategyId",
    Tokens = "tokens",
    TransactionHash = "transactionHash"
}
export type BAppRegistered_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BAppRegistered_Filter>>>;
    bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<BAppRegistered_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    sharedRiskLevel?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevel_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevel_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevel_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevel_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevel_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum BAppRegistered_OrderBy {
    BAppAddress = "bAppAddress",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    MetadataUri = "metadataURI",
    Owner = "owner",
    SharedRiskLevel = "sharedRiskLevel",
    Tokens = "tokens",
    TransactionHash = "transactionHash"
}
export type BAppToken_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BAppToken_Filter>>>;
    bApp?: InputMaybe<Scalars['String']['input']>;
    bApp_?: InputMaybe<BApp_Filter>;
    bApp_contains?: InputMaybe<Scalars['String']['input']>;
    bApp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_ends_with?: InputMaybe<Scalars['String']['input']>;
    bApp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_gt?: InputMaybe<Scalars['String']['input']>;
    bApp_gte?: InputMaybe<Scalars['String']['input']>;
    bApp_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bApp_lt?: InputMaybe<Scalars['String']['input']>;
    bApp_lte?: InputMaybe<Scalars['String']['input']>;
    bApp_not?: InputMaybe<Scalars['String']['input']>;
    bApp_not_contains?: InputMaybe<Scalars['String']['input']>;
    bApp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    bApp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bApp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    bApp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_starts_with?: InputMaybe<Scalars['String']['input']>;
    bApp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<BAppToken_Filter>>>;
    sharedRiskLevel?: InputMaybe<Scalars['BigInt']['input']>;
    sharedRiskLevel_gt?: InputMaybe<Scalars['BigInt']['input']>;
    sharedRiskLevel_gte?: InputMaybe<Scalars['BigInt']['input']>;
    sharedRiskLevel_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevel_lt?: InputMaybe<Scalars['BigInt']['input']>;
    sharedRiskLevel_lte?: InputMaybe<Scalars['BigInt']['input']>;
    sharedRiskLevel_not?: InputMaybe<Scalars['BigInt']['input']>;
    sharedRiskLevel_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    totalObligatedBalance?: InputMaybe<Scalars['BigInt']['input']>;
    totalObligatedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalObligatedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalObligatedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalObligatedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalObligatedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalObligatedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalObligatedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum BAppToken_OrderBy {
    BApp = "bApp",
    BAppId = "bApp__id",
    BAppMetadataUri = "bApp__metadataURI",
    Id = "id",
    SharedRiskLevel = "sharedRiskLevel",
    Token = "token",
    TotalObligatedBalance = "totalObligatedBalance"
}
export type BAppTokensCreated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BAppTokensCreated_Filter>>>;
    bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<BAppTokensCreated_Filter>>>;
    sharedRiskLevels?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum BAppTokensCreated_OrderBy {
    BAppAddress = "bAppAddress",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    SharedRiskLevels = "sharedRiskLevels",
    Tokens = "tokens",
    TransactionHash = "transactionHash"
}
export type BAppTokensUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BAppTokensUpdated_Filter>>>;
    bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<BAppTokensUpdated_Filter>>>;
    sharedRiskLevels?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sharedRiskLevels_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum BAppTokensUpdated_OrderBy {
    BAppAddress = "bAppAddress",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    SharedRiskLevels = "sharedRiskLevels",
    Tokens = "tokens",
    TransactionHash = "transactionHash"
}
export type BApp_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<BApp_Filter>>>;
    bAppTokens_?: InputMaybe<BAppToken_Filter>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<BApp_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategies_?: InputMaybe<StrategyBAppOptIn_Filter>;
};
export declare enum BApp_OrderBy {
    BAppTokens = "bAppTokens",
    Id = "id",
    MetadataUri = "metadataURI",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerMetadataUri = "owner__metadataURI",
    OwnerNonce = "owner__nonce",
    OwnerTotalDelegatedPercentage = "owner__totalDelegatedPercentage",
    OwnerValidatorCount = "owner__validatorCount",
    Strategies = "strategies"
}
export type BlockChangedFilter = {
    number_gte: Scalars['Int']['input'];
};
export type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']['input']>;
    number?: InputMaybe<Scalars['Int']['input']>;
    number_gte?: InputMaybe<Scalars['Int']['input']>;
};
export type ClusterDeposited_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterDeposited_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterDeposited_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ClusterDeposited_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type ClusterLiquidated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterLiquidated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterLiquidated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ClusterLiquidated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type ClusterReactivated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterReactivated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterReactivated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ClusterReactivated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type ClusterWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterWithdrawn_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ClusterWithdrawn_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type Cluster_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    active?: InputMaybe<Scalars['Boolean']['input']>;
    active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    active_not?: InputMaybe<Scalars['Boolean']['input']>;
    active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    and?: InputMaybe<Array<InputMaybe<Cluster_Filter>>>;
    balance?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    index?: InputMaybe<Scalars['BigInt']['input']>;
    index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    index_not?: InputMaybe<Scalars['BigInt']['input']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Cluster_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validators_?: InputMaybe<Validator_Filter>;
};
export declare enum Cluster_OrderBy {
    Active = "active",
    Balance = "balance",
    Id = "id",
    Index = "index",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    NetworkFeeIndex = "networkFeeIndex",
    OperatorIds = "operatorIds",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerMetadataUri = "owner__metadataURI",
    OwnerNonce = "owner__nonce",
    OwnerTotalDelegatedPercentage = "owner__totalDelegatedPercentage",
    OwnerValidatorCount = "owner__validatorCount",
    ValidatorCount = "validatorCount",
    Validators = "validators"
}
export declare enum DaoUpdateTypes {
    DeclareOperatorFeePeriod = "DECLARE_OPERATOR_FEE_PERIOD",
    ExecuteOperatorFeePeriod = "EXECUTE_OPERATOR_FEE_PERIOD",
    Initialization = "INITIALIZATION",
    LiquidationThreshold = "LIQUIDATION_THRESHOLD",
    MinLiquidationCollateral = "MIN_LIQUIDATION_COLLATERAL",
    NetworkFee = "NETWORK_FEE",
    OperatorAdded = "OPERATOR_ADDED",
    OperatorFeeIncreaseLimit = "OPERATOR_FEE_INCREASE_LIMIT",
    OperatorMaxFee = "OPERATOR_MAX_FEE",
    OperatorRemoved = "OPERATOR_REMOVED",
    ValidatorAdded = "VALIDATOR_ADDED",
    ValidatorRemoved = "VALIDATOR_REMOVED"
}
export type DaoValues_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DaoValues_Filter>>>;
    declareOperatorFeePeriod?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    declareOperatorFeePeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    executeOperatorFeePeriod?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    executeOperatorFeePeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    liquidationThreshold?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    liquidationThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    minimumLiquidationCollateral?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    minimumLiquidationCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFee?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndexBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorFeeIncreaseLimit?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorFeeIncreaseLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorMaximumFee?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorMaximumFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsAdded?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsAdded_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsRemoved?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsRemoved_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<DaoValues_Filter>>>;
    totalAccounts?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAccounts_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalOperators?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalOperators_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalValidators?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalValidators_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    updateType?: InputMaybe<DaoUpdateTypes>;
    updateType_in?: InputMaybe<Array<DaoUpdateTypes>>;
    updateType_not?: InputMaybe<DaoUpdateTypes>;
    updateType_not_in?: InputMaybe<Array<DaoUpdateTypes>>;
    validatorsAdded?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsAdded_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsPerOperatorLimit?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsPerOperatorLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsRemoved?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsRemoved_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum DaoValues_OrderBy {
    DeclareOperatorFeePeriod = "declareOperatorFeePeriod",
    ExecuteOperatorFeePeriod = "executeOperatorFeePeriod",
    Id = "id",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    LiquidationThreshold = "liquidationThreshold",
    MinimumLiquidationCollateral = "minimumLiquidationCollateral",
    NetworkFee = "networkFee",
    NetworkFeeIndex = "networkFeeIndex",
    NetworkFeeIndexBlockNumber = "networkFeeIndexBlockNumber",
    OperatorFeeIncreaseLimit = "operatorFeeIncreaseLimit",
    OperatorMaximumFee = "operatorMaximumFee",
    OperatorsAdded = "operatorsAdded",
    OperatorsRemoved = "operatorsRemoved",
    TotalAccounts = "totalAccounts",
    TotalOperators = "totalOperators",
    TotalValidators = "totalValidators",
    UpdateType = "updateType",
    ValidatorsAdded = "validatorsAdded",
    ValidatorsPerOperatorLimit = "validatorsPerOperatorLimit",
    ValidatorsRemoved = "validatorsRemoved"
}
export type DeclareOperatorFeePeriodUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DeclareOperatorFeePeriodUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<DeclareOperatorFeePeriodUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum DeclareOperatorFeePeriodUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type DelegationCreated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DelegationCreated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    delegator?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<DelegationCreated_Filter>>>;
    percentage?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    receiver?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum DelegationCreated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Delegator = "delegator",
    Id = "id",
    Percentage = "percentage",
    Receiver = "receiver",
    TransactionHash = "transactionHash"
}
export type DelegationRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DelegationRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    delegator?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<DelegationRemoved_Filter>>>;
    receiver?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum DelegationRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Delegator = "delegator",
    Id = "id",
    Receiver = "receiver",
    TransactionHash = "transactionHash"
}
export type DelegationUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DelegationUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    delegator?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<DelegationUpdated_Filter>>>;
    percentage?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    receiver?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum DelegationUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Delegator = "delegator",
    Id = "id",
    Percentage = "percentage",
    Receiver = "receiver",
    TransactionHash = "transactionHash"
}
export type Delegation_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Delegation_Filter>>>;
    delegator?: InputMaybe<Scalars['String']['input']>;
    delegator_?: InputMaybe<Account_Filter>;
    delegator_contains?: InputMaybe<Scalars['String']['input']>;
    delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
    delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    delegator_gt?: InputMaybe<Scalars['String']['input']>;
    delegator_gte?: InputMaybe<Scalars['String']['input']>;
    delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
    delegator_lt?: InputMaybe<Scalars['String']['input']>;
    delegator_lte?: InputMaybe<Scalars['String']['input']>;
    delegator_not?: InputMaybe<Scalars['String']['input']>;
    delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
    delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
    delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<Delegation_Filter>>>;
    percentage?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    receiver?: InputMaybe<Scalars['String']['input']>;
    receiver_?: InputMaybe<Account_Filter>;
    receiver_contains?: InputMaybe<Scalars['String']['input']>;
    receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
    receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    receiver_gt?: InputMaybe<Scalars['String']['input']>;
    receiver_gte?: InputMaybe<Scalars['String']['input']>;
    receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
    receiver_lt?: InputMaybe<Scalars['String']['input']>;
    receiver_lte?: InputMaybe<Scalars['String']['input']>;
    receiver_not?: InputMaybe<Scalars['String']['input']>;
    receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
    receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
    receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum Delegation_OrderBy {
    Delegator = "delegator",
    DelegatorFeeRecipient = "delegator__feeRecipient",
    DelegatorId = "delegator__id",
    DelegatorMetadataUri = "delegator__metadataURI",
    DelegatorNonce = "delegator__nonce",
    DelegatorTotalDelegatedPercentage = "delegator__totalDelegatedPercentage",
    DelegatorValidatorCount = "delegator__validatorCount",
    Id = "id",
    Percentage = "percentage",
    Receiver = "receiver",
    ReceiverFeeRecipient = "receiver__feeRecipient",
    ReceiverId = "receiver__id",
    ReceiverMetadataUri = "receiver__metadataURI",
    ReceiverNonce = "receiver__nonce",
    ReceiverTotalDelegatedPercentage = "receiver__totalDelegatedPercentage",
    ReceiverValidatorCount = "receiver__validatorCount"
}
export type ExecuteOperatorFeePeriodUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ExecuteOperatorFeePeriodUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<ExecuteOperatorFeePeriodUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ExecuteOperatorFeePeriodUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type FeeRecipientAddressUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<FeeRecipientAddressUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<FeeRecipientAddressUpdated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    recipientAddress?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    recipientAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum FeeRecipientAddressUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Owner = "owner",
    RecipientAddress = "recipientAddress",
    TransactionHash = "transactionHash"
}
export type Initialized_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    version?: InputMaybe<Scalars['BigInt']['input']>;
    version_gt?: InputMaybe<Scalars['BigInt']['input']>;
    version_gte?: InputMaybe<Scalars['BigInt']['input']>;
    version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    version_lt?: InputMaybe<Scalars['BigInt']['input']>;
    version_lte?: InputMaybe<Scalars['BigInt']['input']>;
    version_not?: InputMaybe<Scalars['BigInt']['input']>;
    version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Initialized_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Version = "version"
}
export type LiquidationThresholdPeriodUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LiquidationThresholdPeriodUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<LiquidationThresholdPeriodUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum LiquidationThresholdPeriodUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type MaxFeeIncrementSet_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<MaxFeeIncrementSet_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    newMaxFeeIncrement?: InputMaybe<Scalars['BigInt']['input']>;
    newMaxFeeIncrement_gt?: InputMaybe<Scalars['BigInt']['input']>;
    newMaxFeeIncrement_gte?: InputMaybe<Scalars['BigInt']['input']>;
    newMaxFeeIncrement_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    newMaxFeeIncrement_lt?: InputMaybe<Scalars['BigInt']['input']>;
    newMaxFeeIncrement_lte?: InputMaybe<Scalars['BigInt']['input']>;
    newMaxFeeIncrement_not?: InputMaybe<Scalars['BigInt']['input']>;
    newMaxFeeIncrement_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<MaxFeeIncrementSet_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum MaxFeeIncrementSet_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    NewMaxFeeIncrement = "newMaxFeeIncrement",
    TransactionHash = "transactionHash"
}
export type MinimumLiquidationCollateralUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<MinimumLiquidationCollateralUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<MinimumLiquidationCollateralUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum MinimumLiquidationCollateralUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type NetworkEarningsWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<NetworkEarningsWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<NetworkEarningsWithdrawn_Filter>>>;
    recipient?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum NetworkEarningsWithdrawn_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Recipient = "recipient",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type NetworkFeeUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<NetworkFeeUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    newFee?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    newFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oldFee?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oldFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<NetworkFeeUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum NetworkFeeUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    NewFee = "newFee",
    OldFee = "oldFee",
    TransactionHash = "transactionHash"
}
export type ObligationCreated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ObligationCreated_Filter>>>;
    bApp?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    obligationPercentage?: InputMaybe<Scalars['BigInt']['input']>;
    obligationPercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    obligationPercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    obligationPercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligationPercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    obligationPercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    obligationPercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    obligationPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ObligationCreated_Filter>>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ObligationCreated_OrderBy {
    BApp = "bApp",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    ObligationPercentage = "obligationPercentage",
    StrategyId = "strategyId",
    Token = "token",
    TransactionHash = "transactionHash"
}
export type ObligationUpdateProposed_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ObligationUpdateProposed_Filter>>>;
    bApp?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ObligationUpdateProposed_Filter>>>;
    percentage?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ObligationUpdateProposed_OrderBy {
    BApp = "bApp",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Percentage = "percentage",
    StrategyId = "strategyId",
    Token = "token",
    TransactionHash = "transactionHash"
}
export type ObligationUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ObligationUpdated_Filter>>>;
    bApp?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    isFast?: InputMaybe<Scalars['Boolean']['input']>;
    isFast_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isFast_not?: InputMaybe<Scalars['Boolean']['input']>;
    isFast_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ObligationUpdated_Filter>>>;
    percentage?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ObligationUpdated_OrderBy {
    BApp = "bApp",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    IsFast = "isFast",
    Percentage = "percentage",
    StrategyId = "strategyId",
    Token = "token",
    TransactionHash = "transactionHash"
}
export type Obligation_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Obligation_Filter>>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    obligatedBalance?: InputMaybe<Scalars['BigInt']['input']>;
    obligatedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    obligatedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    obligatedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    obligatedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    obligatedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    obligatedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
    obligatedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Obligation_Filter>>>;
    percentage?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposed?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentageProposedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentageProposed_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposed_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentageProposed_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposed_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposed_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentageProposed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
    percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyBAppOptIn?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_?: InputMaybe<StrategyBAppOptIn_Filter>;
    strategyBAppOptIn_contains?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_gt?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_gte?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategyBAppOptIn_lt?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_lte?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not_contains?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategyBAppOptIn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategyBAppOptIn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum Obligation_OrderBy {
    Id = "id",
    ObligatedBalance = "obligatedBalance",
    Percentage = "percentage",
    PercentageProposed = "percentageProposed",
    PercentageProposedTimestamp = "percentageProposedTimestamp",
    StrategyBAppOptIn = "strategyBAppOptIn",
    StrategyBAppOptInId = "strategyBAppOptIn__id",
    Token = "token"
}
export type OperatorAdded_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorAdded_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorAdded_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorAdded_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    PublicKey = "publicKey",
    TransactionHash = "transactionHash"
}
export type OperatorFeeDeclarationCancelled_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeDeclarationCancelled_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeDeclarationCancelled_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorFeeDeclarationCancelled_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type OperatorFeeDeclared_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeDeclared_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeDeclared_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorFeeDeclared_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type OperatorFeeExecuted_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeExecuted_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeExecuted_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorFeeExecuted_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type OperatorFeeIncreaseLimitUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeIncreaseLimitUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeIncreaseLimitUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum OperatorFeeIncreaseLimitUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type OperatorMaximumFeeUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorMaximumFeeUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    maxFee?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maxFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorMaximumFeeUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorMaximumFeeUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    MaxFee = "maxFee",
    TransactionHash = "transactionHash"
}
export type OperatorMultipleWhitelistRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistRemoved_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorMultipleWhitelistRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    TransactionHash = "transactionHash",
    WhitelistAddresses = "whitelistAddresses"
}
export type OperatorMultipleWhitelistUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorMultipleWhitelistUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    TransactionHash = "transactionHash",
    WhitelistAddresses = "whitelistAddresses"
}
export type OperatorPrivacyStatusUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorPrivacyStatusUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorPrivacyStatusUpdated_Filter>>>;
    toPrivate?: InputMaybe<Scalars['Boolean']['input']>;
    toPrivate_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    toPrivate_not?: InputMaybe<Scalars['Boolean']['input']>;
    toPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorPrivacyStatusUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    ToPrivate = "toPrivate",
    TransactionHash = "transactionHash"
}
export type OperatorRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorRemoved_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    TransactionHash = "transactionHash"
}
export type OperatorWhitelistUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorWhitelistUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorWhitelistUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelisted?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_gt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_gte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelisted_lt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_lte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_not?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorWhitelistUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    TransactionHash = "transactionHash",
    Whitelisted = "whitelisted"
}
export type OperatorWhitelistingContractUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorWhitelistingContractUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorWhitelistingContractUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistingContract?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistingContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_not?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorWhitelistingContractUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    TransactionHash = "transactionHash",
    WhitelistingContract = "whitelistingContract"
}
export type OperatorWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorWithdrawn_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum OperatorWithdrawn_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type Operator_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Operator_Filter>>>;
    declaredFee?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    declaredFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeIndexBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
    isPrivate_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isPrivate_not?: InputMaybe<Scalars['Boolean']['input']>;
    isPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Operator_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    removed?: InputMaybe<Scalars['Boolean']['input']>;
    removed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    removed_not?: InputMaybe<Scalars['Boolean']['input']>;
    removed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    totalWithdrawn?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalWithdrawn_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validators_?: InputMaybe<Validator_Filter>;
    whitelisted?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelistedContract?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistedContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_not?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelisted_?: InputMaybe<Account_Filter>;
    whitelisted_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_not?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};
export declare enum Operator_OrderBy {
    DeclaredFee = "declaredFee",
    Fee = "fee",
    FeeIndex = "feeIndex",
    FeeIndexBlockNumber = "feeIndexBlockNumber",
    Id = "id",
    IsPrivate = "isPrivate",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    OperatorId = "operatorId",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerMetadataUri = "owner__metadataURI",
    OwnerNonce = "owner__nonce",
    OwnerTotalDelegatedPercentage = "owner__totalDelegatedPercentage",
    OwnerValidatorCount = "owner__validatorCount",
    PublicKey = "publicKey",
    Removed = "removed",
    TotalWithdrawn = "totalWithdrawn",
    ValidatorCount = "validatorCount",
    Validators = "validators",
    Whitelisted = "whitelisted",
    WhitelistedContract = "whitelistedContract"
}
/** Defines the order direction, either ascending or descending */
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export type OwnershipTransferred_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    newOwner?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
    previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OwnershipTransferred_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    NewOwner = "newOwner",
    PreviousOwner = "previousOwner",
    TransactionHash = "transactionHash"
}
export type StrategyBAppOptIn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyBAppOptIn_Filter>>>;
    bApp?: InputMaybe<Scalars['String']['input']>;
    bApp_?: InputMaybe<BApp_Filter>;
    bApp_contains?: InputMaybe<Scalars['String']['input']>;
    bApp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_ends_with?: InputMaybe<Scalars['String']['input']>;
    bApp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_gt?: InputMaybe<Scalars['String']['input']>;
    bApp_gte?: InputMaybe<Scalars['String']['input']>;
    bApp_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bApp_lt?: InputMaybe<Scalars['String']['input']>;
    bApp_lte?: InputMaybe<Scalars['String']['input']>;
    bApp_not?: InputMaybe<Scalars['String']['input']>;
    bApp_not_contains?: InputMaybe<Scalars['String']['input']>;
    bApp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    bApp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    bApp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    bApp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    bApp_starts_with?: InputMaybe<Scalars['String']['input']>;
    bApp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    obligations_?: InputMaybe<Obligation_Filter>;
    or?: InputMaybe<Array<InputMaybe<StrategyBAppOptIn_Filter>>>;
    strategy?: InputMaybe<Scalars['String']['input']>;
    strategy_?: InputMaybe<Strategy_Filter>;
    strategy_contains?: InputMaybe<Scalars['String']['input']>;
    strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_gt?: InputMaybe<Scalars['String']['input']>;
    strategy_gte?: InputMaybe<Scalars['String']['input']>;
    strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategy_lt?: InputMaybe<Scalars['String']['input']>;
    strategy_lte?: InputMaybe<Scalars['String']['input']>;
    strategy_not?: InputMaybe<Scalars['String']['input']>;
    strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
    strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum StrategyBAppOptIn_OrderBy {
    BApp = "bApp",
    BAppId = "bApp__id",
    BAppMetadataUri = "bApp__metadataURI",
    Id = "id",
    Obligations = "obligations",
    Strategy = "strategy",
    StrategyFee = "strategy__fee",
    StrategyFeeProposed = "strategy__feeProposed",
    StrategyFeeProposedTimestamp = "strategy__feeProposedTimestamp",
    StrategyId = "strategy__id",
    StrategyMetadataUri = "strategy__metadataURI",
    StrategyStrategyId = "strategy__strategyId"
}
export type StrategyCreated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyCreated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<StrategyCreated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyCreated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    MetadataUri = "metadataURI",
    Owner = "owner",
    StrategyId = "strategyId",
    TransactionHash = "transactionHash"
}
export type StrategyDeposit_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<StrategyDeposit_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    contributor?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_contains?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_gt?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_gte?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    contributor_lt?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_lte?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_not?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<StrategyDeposit_Filter>>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyDeposit_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Contributor = "contributor",
    Id = "id",
    StrategyId = "strategyId",
    Token = "token",
    TransactionHash = "transactionHash"
}
export type StrategyFeeUpdateProposed_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyFeeUpdateProposed_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<StrategyFeeUpdateProposed_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    proposedFee?: InputMaybe<Scalars['BigInt']['input']>;
    proposedFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    proposedFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    proposedFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    proposedFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    proposedFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    proposedFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    proposedFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyFeeUpdateProposed_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    Owner = "owner",
    ProposedFee = "proposedFee",
    StrategyId = "strategyId",
    TransactionHash = "transactionHash"
}
export type StrategyFeeUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyFeeUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    oldFee?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oldFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<StrategyFeeUpdated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyFeeUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OldFee = "oldFee",
    Owner = "owner",
    StrategyId = "strategyId",
    TransactionHash = "transactionHash"
}
export type StrategyMetadataUriUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyMetadataUriUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<StrategyMetadataUriUpdated_Filter>>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyMetadataUriUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    MetadataUri = "metadataURI",
    StrategyId = "strategyId",
    TransactionHash = "transactionHash"
}
export type StrategyTokenBalance_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyTokenBalance_Filter>>>;
    balance?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<StrategyTokenBalance_Filter>>>;
    riskValue?: InputMaybe<Scalars['BigInt']['input']>;
    riskValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
    riskValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
    riskValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    riskValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
    riskValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
    riskValue_not?: InputMaybe<Scalars['BigInt']['input']>;
    riskValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategy?: InputMaybe<Scalars['String']['input']>;
    strategy_?: InputMaybe<Strategy_Filter>;
    strategy_contains?: InputMaybe<Scalars['String']['input']>;
    strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_gt?: InputMaybe<Scalars['String']['input']>;
    strategy_gte?: InputMaybe<Scalars['String']['input']>;
    strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategy_lt?: InputMaybe<Scalars['String']['input']>;
    strategy_lte?: InputMaybe<Scalars['String']['input']>;
    strategy_not?: InputMaybe<Scalars['String']['input']>;
    strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
    strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyTokenBalance_OrderBy {
    Balance = "balance",
    Id = "id",
    RiskValue = "riskValue",
    Strategy = "strategy",
    StrategyFee = "strategy__fee",
    StrategyFeeProposed = "strategy__feeProposed",
    StrategyFeeProposedTimestamp = "strategy__feeProposedTimestamp",
    StrategyId = "strategy__id",
    StrategyMetadataUri = "strategy__metadataURI",
    StrategyStrategyId = "strategy__strategyId",
    Token = "token"
}
export type StrategyUserBalance_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StrategyUserBalance_Filter>>>;
    contributor?: InputMaybe<Scalars['String']['input']>;
    contributor_?: InputMaybe<Account_Filter>;
    contributor_contains?: InputMaybe<Scalars['String']['input']>;
    contributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    contributor_ends_with?: InputMaybe<Scalars['String']['input']>;
    contributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contributor_gt?: InputMaybe<Scalars['String']['input']>;
    contributor_gte?: InputMaybe<Scalars['String']['input']>;
    contributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
    contributor_lt?: InputMaybe<Scalars['String']['input']>;
    contributor_lte?: InputMaybe<Scalars['String']['input']>;
    contributor_not?: InputMaybe<Scalars['String']['input']>;
    contributor_not_contains?: InputMaybe<Scalars['String']['input']>;
    contributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    contributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    contributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    contributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    contributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contributor_starts_with?: InputMaybe<Scalars['String']['input']>;
    contributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    depositAmount?: InputMaybe<Scalars['BigInt']['input']>;
    depositAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    depositAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    depositAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    depositAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    depositAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    depositAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    depositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<StrategyUserBalance_Filter>>>;
    proposedWithdrawal?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    proposedWithdrawalTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawalTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    proposedWithdrawal_gt?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawal_gte?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    proposedWithdrawal_lt?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawal_lte?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawal_not?: InputMaybe<Scalars['BigInt']['input']>;
    proposedWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategy?: InputMaybe<Scalars['String']['input']>;
    strategy_?: InputMaybe<Strategy_Filter>;
    strategy_contains?: InputMaybe<Scalars['String']['input']>;
    strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_gt?: InputMaybe<Scalars['String']['input']>;
    strategy_gte?: InputMaybe<Scalars['String']['input']>;
    strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategy_lt?: InputMaybe<Scalars['String']['input']>;
    strategy_lte?: InputMaybe<Scalars['String']['input']>;
    strategy_not?: InputMaybe<Scalars['String']['input']>;
    strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
    strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
    strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyUserBalance_OrderBy {
    Contributor = "contributor",
    ContributorFeeRecipient = "contributor__feeRecipient",
    ContributorId = "contributor__id",
    ContributorMetadataUri = "contributor__metadataURI",
    ContributorNonce = "contributor__nonce",
    ContributorTotalDelegatedPercentage = "contributor__totalDelegatedPercentage",
    ContributorValidatorCount = "contributor__validatorCount",
    DepositAmount = "depositAmount",
    Id = "id",
    ProposedWithdrawal = "proposedWithdrawal",
    ProposedWithdrawalTimestamp = "proposedWithdrawalTimestamp",
    Strategy = "strategy",
    StrategyFee = "strategy__fee",
    StrategyFeeProposed = "strategy__feeProposed",
    StrategyFeeProposedTimestamp = "strategy__feeProposedTimestamp",
    StrategyId = "strategy__id",
    StrategyMetadataUri = "strategy__metadataURI",
    StrategyStrategyId = "strategy__strategyId",
    Token = "token"
}
export type StrategyWithdrawalProposed_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    account?: InputMaybe<Scalars['Bytes']['input']>;
    account_contains?: InputMaybe<Scalars['Bytes']['input']>;
    account_gt?: InputMaybe<Scalars['Bytes']['input']>;
    account_gte?: InputMaybe<Scalars['Bytes']['input']>;
    account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    account_lt?: InputMaybe<Scalars['Bytes']['input']>;
    account_lte?: InputMaybe<Scalars['Bytes']['input']>;
    account_not?: InputMaybe<Scalars['Bytes']['input']>;
    account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    amount?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<StrategyWithdrawalProposed_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<StrategyWithdrawalProposed_Filter>>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyWithdrawalProposed_OrderBy {
    Account = "account",
    Amount = "amount",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    StrategyId = "strategyId",
    Token = "token",
    TransactionHash = "transactionHash"
}
export type StrategyWithdrawal_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<StrategyWithdrawal_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    contributor?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_contains?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_gt?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_gte?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    contributor_lt?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_lte?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_not?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    contributor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    isFast?: InputMaybe<Scalars['Boolean']['input']>;
    isFast_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isFast_not?: InputMaybe<Scalars['Boolean']['input']>;
    isFast_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    or?: InputMaybe<Array<InputMaybe<StrategyWithdrawal_Filter>>>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token?: InputMaybe<Scalars['Bytes']['input']>;
    token_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_gt?: InputMaybe<Scalars['Bytes']['input']>;
    token_gte?: InputMaybe<Scalars['Bytes']['input']>;
    token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token_lt?: InputMaybe<Scalars['Bytes']['input']>;
    token_lte?: InputMaybe<Scalars['Bytes']['input']>;
    token_not?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum StrategyWithdrawal_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Contributor = "contributor",
    Id = "id",
    IsFast = "isFast",
    StrategyId = "strategyId",
    Token = "token",
    TransactionHash = "transactionHash"
}
export type Strategy_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
    bApps_?: InputMaybe<StrategyBAppOptIn_Filter>;
    balances_?: InputMaybe<StrategyTokenBalance_Filter>;
    deposits_?: InputMaybe<StrategyUserBalance_Filter>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposed?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeProposedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeProposed_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposed_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeProposed_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposed_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposed_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeProposed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
    metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    strategyId?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
    strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Strategy_OrderBy {
    BApps = "bApps",
    Balances = "balances",
    Deposits = "deposits",
    Fee = "fee",
    FeeProposed = "feeProposed",
    FeeProposedTimestamp = "feeProposedTimestamp",
    Id = "id",
    MetadataUri = "metadataURI",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerMetadataUri = "owner__metadataURI",
    OwnerNonce = "owner__nonce",
    OwnerTotalDelegatedPercentage = "owner__totalDelegatedPercentage",
    OwnerValidatorCount = "owner__validatorCount",
    StrategyId = "strategyId"
}
export type Upgraded_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    implementation?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_contains?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_gt?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_gte?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    implementation_lt?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_lte?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_not?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    implementation_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum Upgraded_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Implementation = "implementation",
    TransactionHash = "transactionHash"
}
export type ValidatorAdded_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ValidatorAdded_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ValidatorAdded_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    shares?: InputMaybe<Scalars['Bytes']['input']>;
    shares_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    shares_lt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_lte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ValidatorAdded_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    PublicKey = "publicKey",
    Shares = "shares",
    TransactionHash = "transactionHash"
}
export type ValidatorRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ValidatorRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ValidatorRemoved_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ValidatorRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    PublicKey = "publicKey",
    TransactionHash = "transactionHash"
}
export type Validator_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
    cluster?: InputMaybe<Scalars['String']['input']>;
    cluster_?: InputMaybe<Cluster_Filter>;
    cluster_contains?: InputMaybe<Scalars['String']['input']>;
    cluster_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_ends_with?: InputMaybe<Scalars['String']['input']>;
    cluster_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_gt?: InputMaybe<Scalars['String']['input']>;
    cluster_gte?: InputMaybe<Scalars['String']['input']>;
    cluster_in?: InputMaybe<Array<Scalars['String']['input']>>;
    cluster_lt?: InputMaybe<Scalars['String']['input']>;
    cluster_lte?: InputMaybe<Scalars['String']['input']>;
    cluster_not?: InputMaybe<Scalars['String']['input']>;
    cluster_not_contains?: InputMaybe<Scalars['String']['input']>;
    cluster_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    cluster_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    cluster_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    cluster_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_starts_with?: InputMaybe<Scalars['String']['input']>;
    cluster_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    operators?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_?: InputMaybe<Operator_Filter>;
    operators_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_not?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    removed?: InputMaybe<Scalars['Boolean']['input']>;
    removed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    removed_not?: InputMaybe<Scalars['Boolean']['input']>;
    removed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    shares?: InputMaybe<Scalars['Bytes']['input']>;
    shares_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    shares_lt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_lte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum Validator_OrderBy {
    Cluster = "cluster",
    ClusterActive = "cluster__active",
    ClusterBalance = "cluster__balance",
    ClusterId = "cluster__id",
    ClusterIndex = "cluster__index",
    ClusterLastUpdateBlockNumber = "cluster__lastUpdateBlockNumber",
    ClusterLastUpdateBlockTimestamp = "cluster__lastUpdateBlockTimestamp",
    ClusterLastUpdateTransactionHash = "cluster__lastUpdateTransactionHash",
    ClusterNetworkFeeIndex = "cluster__networkFeeIndex",
    ClusterValidatorCount = "cluster__validatorCount",
    Id = "id",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    Operators = "operators",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerMetadataUri = "owner__metadataURI",
    OwnerNonce = "owner__nonce",
    OwnerTotalDelegatedPercentage = "owner__totalDelegatedPercentage",
    OwnerValidatorCount = "owner__validatorCount",
    Removed = "removed",
    Shares = "shares"
}
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export type GetStrategyBAppOptInsQueryVariables = Exact<{
    bAppId: Scalars['Bytes']['input'];
}>;
export type GetStrategyBAppOptInsQuery = {
    strategyBAppOptIns: Array<{
        id: string;
        strategy: {
            balances: Array<{
                token: Address;
                balance: string;
            }>;
        };
        obligations: Array<{
            token: Address;
            percentage: string;
        }>;
    }>;
};
export type GetParticipantWeightInputQueryVariables = Exact<{
    bAppId: Scalars['ID']['input'];
}>;
export type GetParticipantWeightInputQuery = {
    bapp?: {
        bAppTokens: Array<{
            token: Address;
            sharedRiskLevel: string;
            totalObligatedBalance: string;
        }>;
        strategies: Array<{
            obligations: Array<{
                obligatedBalance: string;
                token: Address;
                percentage: string;
            }>;
            strategy: {
                id: string;
                owner: {
                    id: Address;
                    delegators: Array<{
                        percentage: string;
                        delegator: {
                            id: Address;
                        };
                    }>;
                };
                balances: Array<{
                    token: Address;
                    riskValue: string;
                }>;
            };
        }>;
    } | null;
};
export type GetObligatedBalancesQueryVariables = Exact<{
    bAppId: Scalars['ID']['input'];
}>;
export type GetObligatedBalancesQuery = {
    bapp?: {
        bAppTokens: Array<{
            totalObligatedBalance: string;
            token: Address;
        }>;
        strategies: Array<{
            strategy: {
                id: string;
            };
            obligations: Array<{
                token: Address;
                obligatedBalance: string;
            }>;
        }>;
    } | null;
};
export type GetBAppDelegatorsQueryVariables = Exact<{
    bAppId: Scalars['ID']['input'];
}>;
export type GetBAppDelegatorsQuery = {
    bapp?: {
        strategies: Array<{
            strategy: {
                id: string;
                owner: {
                    delegators: Array<{
                        percentage: string;
                        delegator: {
                            id: Address;
                        };
                    }>;
                };
            };
        }>;
    } | null;
};
export type GetValidatorsByAccountQueryVariables = Exact<{
    account: Scalars['String']['input'];
}>;
export type GetValidatorsByAccountQuery = {
    validators: Array<{
        id: Address;
    }>;
};
export type GetBappMetadataUriQueryVariables = Exact<{
    bAppId: Scalars['ID']['input'];
}>;
export type GetBappMetadataUriQuery = {
    bapp?: {
        metadataURI?: string | null;
    } | null;
};
export type GetAllBappsMetadataUrIsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetAllBappsMetadataUrIsQuery = {
    bapps: Array<{
        id: Address;
        metadataURI?: string | null;
    }>;
};
export type GetAllStrategyObligatedBalancesForBappQueryVariables = Exact<{
    bAppId: Scalars['ID']['input'];
}>;
export type GetAllStrategyObligatedBalancesForBappQuery = {
    bapp?: {
        strategies: Array<{
            strategy: {
                balances: Array<{
                    balance: string;
                    token: Address;
                }>;
            };
        }>;
    } | null;
};
export type GetDepositedBalancesForStrategyQueryVariables = Exact<{
    strategyId: Scalars['ID']['input'];
}>;
export type GetDepositedBalancesForStrategyQuery = {
    strategy?: {
        deposits: Array<{
            depositAmount: string;
            token: Address;
            contributor: {
                id: Address;
            };
        }>;
    } | null;
};
export type GetAllStrategiesDepositedToQueryVariables = Exact<{
    accountId: Scalars['ID']['input'];
}>;
export type GetAllStrategiesDepositedToQuery = {
    account?: {
        deposits: Array<{
            depositAmount: string;
            token: Address;
            strategy: {
                id: string;
                balances: Array<{
                    balance: string;
                    token: Address;
                }>;
            };
        }>;
    } | null;
};
export type GetTotalDelegatedPercentageForAccountQueryVariables = Exact<{
    accountId: Scalars['ID']['input'];
}>;
export type GetTotalDelegatedPercentageForAccountQuery = {
    account?: {
        totalDelegatedPercentage: string;
    } | null;
};
export type GetAllStrategiesForBappQueryVariables = Exact<{
    bAppId: Scalars['ID']['input'];
}>;
export type GetAllStrategiesForBappQuery = {
    bapp?: {
        strategies: Array<{
            strategy: {
                id: string;
            };
        }>;
    } | null;
};
export type GetAllStrategiesForAccountQueryVariables = Exact<{
    accountId: Scalars['ID']['input'];
}>;
export type GetAllStrategiesForAccountQuery = {
    account?: {
        strategies: Array<{
            id: string;
            balances: Array<{
                balance: string;
                token: Address;
            }>;
        }>;
    } | null;
};
export declare const GetStrategyBAppOptInsDocument: DocumentNode<GetStrategyBAppOptInsQuery, GetStrategyBAppOptInsQueryVariables>;
export declare const GetParticipantWeightInputDocument: DocumentNode<GetParticipantWeightInputQuery, GetParticipantWeightInputQueryVariables>;
export declare const GetObligatedBalancesDocument: DocumentNode<GetObligatedBalancesQuery, GetObligatedBalancesQueryVariables>;
export declare const GetBAppDelegatorsDocument: DocumentNode<GetBAppDelegatorsQuery, GetBAppDelegatorsQueryVariables>;
export declare const GetValidatorsByAccountDocument: DocumentNode<GetValidatorsByAccountQuery, GetValidatorsByAccountQueryVariables>;
export declare const GetBappMetadataUriDocument: DocumentNode<GetBappMetadataUriQuery, GetBappMetadataUriQueryVariables>;
export declare const GetAllBappsMetadataUrIsDocument: DocumentNode<GetAllBappsMetadataUrIsQuery, GetAllBappsMetadataUrIsQueryVariables>;
export declare const GetAllStrategyObligatedBalancesForBappDocument: DocumentNode<GetAllStrategyObligatedBalancesForBappQuery, GetAllStrategyObligatedBalancesForBappQueryVariables>;
export declare const GetDepositedBalancesForStrategyDocument: DocumentNode<GetDepositedBalancesForStrategyQuery, GetDepositedBalancesForStrategyQueryVariables>;
export declare const GetAllStrategiesDepositedToDocument: DocumentNode<GetAllStrategiesDepositedToQuery, GetAllStrategiesDepositedToQueryVariables>;
export declare const GetTotalDelegatedPercentageForAccountDocument: DocumentNode<GetTotalDelegatedPercentageForAccountQuery, GetTotalDelegatedPercentageForAccountQueryVariables>;
export declare const GetAllStrategiesForBappDocument: DocumentNode<GetAllStrategiesForBappQuery, GetAllStrategiesForBappQueryVariables>;
export declare const GetAllStrategiesForAccountDocument: DocumentNode<GetAllStrategiesForAccountQuery, GetAllStrategiesForAccountQueryVariables>;
