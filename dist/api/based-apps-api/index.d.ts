import { APIs } from '..';
import { StrategyWeight } from '../../types/weights';
import { Address } from 'viem';
export declare const getValidatorsBalance: (apis: APIs, args: Parameters<APIs['bam']['getValidatorsByAccount']>[0]) => Promise<{
    account: string;
    validators: never[];
    balance: string;
} | {
    account: string;
    validators: `0x${string}`[];
    balance: bigint;
}>;
export declare const getParticipantWeights: (apis: APIs, args: {
    bAppId: Address;
}) => Promise<StrategyWeight[]>;
type GetDelegatedBalancesResponse = {
    bAppTotalDelegatedBalance: bigint;
    bAppTotalDelegatedBalances: {
        strategyId: string;
        delegation: bigint;
    }[];
};
export declare const getDelegatedBalances: (apis: APIs, args: {
    bAppId: Address;
}) => Promise<GetDelegatedBalancesResponse>;
export declare const getObligatedBalances: (apis: APIs, args: {
    bAppId: Address;
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
export declare const getBasedAppsAPI: (apis: APIs) => {
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
        bAppId: Address;
    }) => Promise<StrategyWeight[]>;
    getDelegatedBalances: (args: {
        bAppId: Address;
    }) => Promise<GetDelegatedBalancesResponse>;
    getObligatedBalances: (args: {
        bAppId: Address;
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
export {};
