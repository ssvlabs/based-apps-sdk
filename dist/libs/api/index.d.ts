import { APIs } from '../../api';
import { GraphQLClient } from 'graphql-request';
export declare const createSSVAPI: (endpoint: string) => {
    checkOperatorDKGEnabled: (dkgAddresses: {
        id: string;
        address: string;
    }[]) => Promise<{
        id: string;
        isHealthy: boolean;
    }[]>;
};
export declare const createBeaconChainAPI: (endpoint: string) => {
    getValidatorBalances: (args: import('../../api/beacon-chain-api').GetValidatorBalancesArgs) => Promise<import('../../api/beacon-chain-api').GetValidatorBalancesResponse>;
};
export declare const createBAMQueries: (graphqlClient: GraphQLClient) => {
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
export declare const createBasedAppsAPI: (apis: APIs) => {
    getValidatorsBalance: (args: import('../../graphql/bam/graphql').Exact<{
        account: string;
    }>) => Promise<{
        account: string;
        validators: never[];
        balance: string;
    } | {
        account: string;
        validators: `0x${string}`[];
        balance: bigint;
    }>;
    getParticipantWeights: (args: {
        bAppId: `0x${string}`;
    }) => Promise<import('../../types/weights').StrategyWeight[]>;
    getDelegatedBalances: (args: {
        bAppId: `0x${string}`;
    }) => Promise<{
        bAppTotalDelegatedBalance: bigint;
        bAppTotalDelegatedBalances: {
            strategyId: string;
            delegation: bigint;
        }[];
    }>;
    getObligatedBalances: (args: {
        bAppId: `0x${string}`;
    }) => Promise<{
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
    } | never[]>;
};
