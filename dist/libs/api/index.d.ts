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
    getStrategyBAppOptIns: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getStrategyBAppOptIns>;
    getParticipantWeightInput: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getParticipantWeightInput>;
    getObligatedBalances: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getObligatedBalances>;
    getBAppDelegators: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getBAppDelegators>;
    getValidatorsByAccount: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getValidatorsByAccount>;
    getBappMetadataURI: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getBappMetadataURI>;
    getAllBappsMetadataURIs: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getAllBappsMetadataURIs>;
    getAllStrategyObligatedBalancesForBapp: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getAllStrategyObligatedBalancesForBapp>;
    getDepositedBalancesForStrategy: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getDepositedBalancesForStrategy>;
    getAllStrategiesDepositedTo: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getAllStrategiesDepositedTo>;
    getTotalDelegatedPercentageForAccount: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getTotalDelegatedPercentageForAccount>;
    getAllStrategiesForBapp: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getAllStrategiesForBapp>;
    getAllStrategiesForAccount: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph/bam').getAllStrategiesForAccount>;
};
export declare const createBasedAppsAPI: (apis: APIs) => {
    getValidatorsBalance: (args: import('../../graphql/bam/graphql').Exact<{
        account: import('../../graphql/bam/graphql').Scalars["String"]["input"];
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
        bAppId: import('abitype').Address;
    }) => Promise<import('../../types/weights').StrategyWeight[]>;
    getDelegatedBalances: (args: {
        bAppId: import('abitype').Address;
    }) => Promise<{
        bAppTotalDelegatedBalance: bigint;
        bAppTotalDelegatedBalances: {
            strategyId: string;
            delegation: bigint;
        }[];
    }>;
    getObligatedBalances: (args: {
        bAppId: import('abitype').Address;
    }) => Promise<{
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
    } | never[]>;
};
