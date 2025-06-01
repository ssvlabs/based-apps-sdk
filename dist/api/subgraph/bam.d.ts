import { GetAllStrategiesDepositedToQueryVariables, GetAllStrategiesForAccountQueryVariables, GetAllStrategiesForBappQueryVariables, GetAllStrategyObligatedBalancesForBappQueryVariables, GetBAppDelegatorsQueryVariables, GetBappMetadataUriQueryVariables, GetDepositedBalancesForStrategyQueryVariables, GetObligatedBalancesQueryVariables, GetParticipantWeightInputQueryVariables, GetStrategyBAppOptInsQueryVariables, GetTotalDelegatedPercentageForAccountQueryVariables, GetValidatorsByAccountQueryVariables } from '../../graphql/bam/graphql';
import { RemoveConfigArg } from '../../types/methods';
import { GraphQLClient } from 'graphql-request';
export declare const getStrategyBAppOptIns: (client: GraphQLClient, args: GetStrategyBAppOptInsQueryVariables) => Promise<{
    id: string;
    strategy: {
        balances: Array<{
            token: import('abitype').Address;
            balance: string;
        }>;
    };
    obligations: Array<{
        token: import('abitype').Address;
        percentage: string;
    }>;
}[]>;
export declare const getParticipantWeightInput: (client: GraphQLClient, args: GetParticipantWeightInputQueryVariables) => Promise<{
    bAppTokens: Array<{
        token: import('abitype').Address;
        sharedRiskLevel: string;
        totalObligatedBalance: string;
    }>;
    strategies: Array<{
        obligations: Array<{
            obligatedBalance: string;
            token: import('abitype').Address;
            percentage: string;
        }>;
        strategy: {
            id: string;
            owner: {
                id: import('abitype').Address;
                delegators: Array<{
                    percentage: string;
                    delegator: {
                        id: import('abitype').Address;
                    };
                }>;
            };
            balances: Array<{
                token: import('abitype').Address;
                riskValue: string;
            }>;
        };
    }>;
} | null | undefined>;
export declare const getObligatedBalances: (client: GraphQLClient, args: GetObligatedBalancesQueryVariables) => Promise<{
    bAppTokens: Array<{
        totalObligatedBalance: string;
        token: import('abitype').Address;
    }>;
    strategies: Array<{
        strategy: {
            id: string;
        };
        obligations: Array<{
            token: import('abitype').Address;
            obligatedBalance: string;
        }>;
    }>;
} | null | undefined>;
export declare const getBAppDelegators: (client: GraphQLClient, args: GetBAppDelegatorsQueryVariables) => Promise<{
    strategies: Array<{
        strategy: {
            id: string;
            owner: {
                delegators: Array<{
                    percentage: string;
                    delegator: {
                        id: import('abitype').Address;
                    };
                }>;
            };
        };
    }>;
} | null | undefined>;
export declare const getValidatorsByAccount: (client: GraphQLClient, args: GetValidatorsByAccountQueryVariables) => Promise<`0x${string}`[]>;
export declare const getBappMetadataURI: (client: GraphQLClient, args: GetBappMetadataUriQueryVariables) => Promise<{
    metadataURI?: string | null;
} | null | undefined>;
export declare const getAllBappsMetadataURIs: (client: GraphQLClient) => Promise<{
    id: import('abitype').Address;
    metadataURI?: string | null;
}[]>;
export declare const getAllStrategyObligatedBalancesForBapp: (client: GraphQLClient, args: GetAllStrategyObligatedBalancesForBappQueryVariables) => Promise<{
    strategies: Array<{
        strategy: {
            balances: Array<{
                balance: string;
                token: import('abitype').Address;
            }>;
        };
    }>;
} | null | undefined>;
export declare const getDepositedBalancesForStrategy: (client: GraphQLClient, args: GetDepositedBalancesForStrategyQueryVariables) => Promise<{
    deposits: Array<{
        depositAmount: string;
        token: import('abitype').Address;
        contributor: {
            id: import('abitype').Address;
        };
    }>;
} | null | undefined>;
export declare const getAllStrategiesDepositedTo: (client: GraphQLClient, args: GetAllStrategiesDepositedToQueryVariables) => Promise<{
    deposits: Array<{
        depositAmount: string;
        token: import('abitype').Address;
        strategy: {
            id: string;
            balances: Array<{
                balance: string;
                token: import('abitype').Address;
            }>;
        };
    }>;
} | null | undefined>;
export declare const getTotalDelegatedPercentageForAccount: (client: GraphQLClient, args: GetTotalDelegatedPercentageForAccountQueryVariables) => Promise<string | undefined>;
export declare const getAllStrategiesForBapp: (client: GraphQLClient, args: GetAllStrategiesForBappQueryVariables) => Promise<string[]>;
export declare const getAllStrategiesForAccount: (client: GraphQLClient, args: GetAllStrategiesForAccountQueryVariables) => Promise<{
    id: string;
    balances: Array<{
        balance: string;
        token: import('abitype').Address;
    }>;
}[]>;
export declare const getBAMQueries: (client: GraphQLClient) => {
    getStrategyBAppOptIns: RemoveConfigArg<typeof getStrategyBAppOptIns>;
    getParticipantWeightInput: RemoveConfigArg<typeof getParticipantWeightInput>;
    getObligatedBalances: RemoveConfigArg<typeof getObligatedBalances>;
    getBAppDelegators: RemoveConfigArg<typeof getBAppDelegators>;
    getValidatorsByAccount: RemoveConfigArg<typeof getValidatorsByAccount>;
    getBappMetadataURI: RemoveConfigArg<typeof getBappMetadataURI>;
    getAllBappsMetadataURIs: RemoveConfigArg<typeof getAllBappsMetadataURIs>;
    getAllStrategyObligatedBalancesForBapp: RemoveConfigArg<typeof getAllStrategyObligatedBalancesForBapp>;
    getDepositedBalancesForStrategy: RemoveConfigArg<typeof getDepositedBalancesForStrategy>;
    getAllStrategiesDepositedTo: RemoveConfigArg<typeof getAllStrategiesDepositedTo>;
    getTotalDelegatedPercentageForAccount: RemoveConfigArg<typeof getTotalDelegatedPercentageForAccount>;
    getAllStrategiesForBapp: RemoveConfigArg<typeof getAllStrategiesForBapp>;
    getAllStrategiesForAccount: RemoveConfigArg<typeof getAllStrategiesForAccount>;
};
