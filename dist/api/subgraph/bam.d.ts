import { GetAllStrategiesDepositedToQueryVariables, GetAllStrategiesForAccountQueryVariables, GetAllStrategiesForBappQueryVariables, GetAllStrategyObligatedBalancesForBappQueryVariables, GetBAppDelegatorsQueryVariables, GetBappMetadataUriQueryVariables, GetDepositedBalancesForStrategyQueryVariables, GetObligatedBalancesQueryVariables, GetParticipantWeightInputQueryVariables, GetStrategyBAppOptInsQueryVariables, GetTotalDelegatedPercentageForAccountQueryVariables, GetValidatorsByAccountQueryVariables } from '../../graphql/bam/graphql';
import { GraphQLClient } from 'graphql-request';
export declare const getStrategyBAppOptIns: (client: GraphQLClient, args: GetStrategyBAppOptInsQueryVariables) => Promise<{
    id: string;
    strategy: {
        balances: {
            token: `0x${string}`;
            balance: string;
        }[];
    };
    obligations: {
        token: `0x${string}`;
        percentage: string;
    }[];
}[]>;
export declare const getParticipantWeightInput: (client: GraphQLClient, args: GetParticipantWeightInputQueryVariables) => Promise<{
    bAppTokens: {
        token: `0x${string}`;
        sharedRiskLevel: string;
        totalObligatedBalance: string;
    }[];
    strategies: {
        obligations: {
            obligatedBalance: string;
            token: `0x${string}`;
            percentage: string;
        }[];
        strategy: {
            id: string;
            owner: {
                id: `0x${string}`;
                delegators: {
                    percentage: string;
                    delegator: {
                        id: `0x${string}`;
                    };
                }[];
            };
            balances: {
                token: `0x${string}`;
                riskValue: string;
            }[];
        };
    }[];
} | null | undefined>;
export declare const getObligatedBalances: (client: GraphQLClient, args: GetObligatedBalancesQueryVariables) => Promise<{
    bAppTokens: {
        totalObligatedBalance: string;
        token: `0x${string}`;
    }[];
    strategies: {
        strategy: {
            id: string;
        };
        obligations: {
            token: `0x${string}`;
            obligatedBalance: string;
        }[];
    }[];
} | null | undefined>;
export declare const getBAppDelegators: (client: GraphQLClient, args: GetBAppDelegatorsQueryVariables) => Promise<{
    strategies: {
        strategy: {
            id: string;
            owner: {
                delegators: {
                    percentage: string;
                    delegator: {
                        id: `0x${string}`;
                    };
                }[];
            };
        };
    }[];
} | null | undefined>;
export declare const getValidatorsByAccount: (client: GraphQLClient, args: GetValidatorsByAccountQueryVariables) => Promise<`0x${string}`[]>;
export declare const getBappMetadataURI: (client: GraphQLClient, args: GetBappMetadataUriQueryVariables) => Promise<{
    metadataURI?: string | null | undefined;
} | null | undefined>;
export declare const getAllBappsMetadataURIs: (client: GraphQLClient) => Promise<{
    id: `0x${string}`;
    metadataURI?: string | null | undefined;
}[]>;
export declare const getAllStrategyObligatedBalancesForBapp: (client: GraphQLClient, args: GetAllStrategyObligatedBalancesForBappQueryVariables) => Promise<{
    strategies: {
        strategy: {
            balances: {
                balance: string;
                token: `0x${string}`;
            }[];
        };
    }[];
} | null | undefined>;
export declare const getDepositedBalancesForStrategy: (client: GraphQLClient, args: GetDepositedBalancesForStrategyQueryVariables) => Promise<{
    deposits: {
        depositAmount: string;
        token: `0x${string}`;
        contributor: {
            id: `0x${string}`;
        };
    }[];
} | null | undefined>;
export declare const getAllStrategiesDepositedTo: (client: GraphQLClient, args: GetAllStrategiesDepositedToQueryVariables) => Promise<{
    deposits: {
        depositAmount: string;
        token: `0x${string}`;
        strategy: {
            id: string;
            balances: {
                balance: string;
                token: `0x${string}`;
            }[];
        };
    }[];
} | null | undefined>;
export declare const getTotalDelegatedPercentageForAccount: (client: GraphQLClient, args: GetTotalDelegatedPercentageForAccountQueryVariables) => Promise<string | undefined>;
export declare const getAllStrategiesForBapp: (client: GraphQLClient, args: GetAllStrategiesForBappQueryVariables) => Promise<string[]>;
export declare const getAllStrategiesForAccount: (client: GraphQLClient, args: GetAllStrategiesForAccountQueryVariables) => Promise<{
    id: string;
    balances: {
        balance: string;
        token: `0x${string}`;
    }[];
}[]>;
export declare const getBAMQueries: (client: GraphQLClient) => {
    getStrategyBAppOptIns: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: `0x${string}`;
    }>) => Promise<{
        id: string;
        strategy: {
            balances: {
                token: `0x${string}`;
                balance: string;
            }[];
        };
        obligations: {
            token: `0x${string}`;
            percentage: string;
        }[];
    }[]>;
    getParticipantWeightInput: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: string;
    }>) => Promise<{
        bAppTokens: {
            token: `0x${string}`;
            sharedRiskLevel: string;
            totalObligatedBalance: string;
        }[];
        strategies: {
            obligations: {
                obligatedBalance: string;
                token: `0x${string}`;
                percentage: string;
            }[];
            strategy: {
                id: string;
                owner: {
                    id: `0x${string}`;
                    delegators: {
                        percentage: string;
                        delegator: {
                            id: `0x${string}`;
                        };
                    }[];
                };
                balances: {
                    token: `0x${string}`;
                    riskValue: string;
                }[];
            };
        }[];
    } | null | undefined>;
    getObligatedBalances: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: string;
    }>) => Promise<{
        bAppTokens: {
            totalObligatedBalance: string;
            token: `0x${string}`;
        }[];
        strategies: {
            strategy: {
                id: string;
            };
            obligations: {
                token: `0x${string}`;
                obligatedBalance: string;
            }[];
        }[];
    } | null | undefined>;
    getBAppDelegators: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: string;
    }>) => Promise<{
        strategies: {
            strategy: {
                id: string;
                owner: {
                    delegators: {
                        percentage: string;
                        delegator: {
                            id: `0x${string}`;
                        };
                    }[];
                };
            };
        }[];
    } | null | undefined>;
    getValidatorsByAccount: (props: import('../../graphql/bam/graphql').Exact<{
        account: string;
    }>) => Promise<`0x${string}`[]>;
    getBappMetadataURI: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: string;
    }>) => Promise<{
        metadataURI?: string | null | undefined;
    } | null | undefined>;
    getAllBappsMetadataURIs: () => Promise<{
        id: `0x${string}`;
        metadataURI?: string | null | undefined;
    }[]>;
    getAllStrategyObligatedBalancesForBapp: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: string;
    }>) => Promise<{
        strategies: {
            strategy: {
                balances: {
                    balance: string;
                    token: `0x${string}`;
                }[];
            };
        }[];
    } | null | undefined>;
    getDepositedBalancesForStrategy: (props: import('../../graphql/bam/graphql').Exact<{
        strategyId: string;
    }>) => Promise<{
        deposits: {
            depositAmount: string;
            token: `0x${string}`;
            contributor: {
                id: `0x${string}`;
            };
        }[];
    } | null | undefined>;
    getAllStrategiesDepositedTo: (props: import('../../graphql/bam/graphql').Exact<{
        accountId: string;
    }>) => Promise<{
        deposits: {
            depositAmount: string;
            token: `0x${string}`;
            strategy: {
                id: string;
                balances: {
                    balance: string;
                    token: `0x${string}`;
                }[];
            };
        }[];
    } | null | undefined>;
    getTotalDelegatedPercentageForAccount: (props: import('../../graphql/bam/graphql').Exact<{
        accountId: string;
    }>) => Promise<string | undefined>;
    getAllStrategiesForBapp: (props: import('../../graphql/bam/graphql').Exact<{
        bAppId: string;
    }>) => Promise<string[]>;
    getAllStrategiesForAccount: (props: import('../../graphql/bam/graphql').Exact<{
        accountId: string;
    }>) => Promise<{
        id: string;
        balances: {
            balance: string;
            token: `0x${string}`;
        }[];
    }[]>;
};
