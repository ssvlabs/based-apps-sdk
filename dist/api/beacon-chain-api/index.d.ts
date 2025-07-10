import { Hex } from 'viem';
export type GetValidatorBalancesArgs = {
    stateId: 'head' | 'genesis' | 'finalized' | 'justified';
    validatorIds: Hex[];
};
export type GetValidatorBalancesResponse = {
    execution_optimistic: boolean;
    finalized: boolean;
    data: {
        index: string;
        balance: string;
    }[];
};
export declare const getValidatorBalances: (baseApi: string, args: GetValidatorBalancesArgs) => Promise<GetValidatorBalancesResponse>;
export declare const getBeaconChainAPI: (endpoint: string) => {
    getValidatorBalances: (args: GetValidatorBalancesArgs) => Promise<GetValidatorBalancesResponse>;
};
