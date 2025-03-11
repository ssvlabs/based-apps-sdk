import { APIs } from '../api';
import { ContractInteractions } from '../contract-interactions/types';
import { createBasedAppsAPI } from '../libs/api';
import { ConfigArgs } from '../utils/zod/config';
import { GraphQLClient } from 'graphql-request';
export type ConfigReturnType = {
    apis: APIs;
    basedAppsAPI: ReturnType<typeof createBasedAppsAPI>;
    contracts: {
        bapp: ContractInteractions<'bapp'>;
    };
    graphs: {
        bam: {
            client: GraphQLClient;
            endpoint: string;
        };
    };
};
export declare const isConfig: (props: unknown) => props is ConfigReturnType;
export declare const createConfig: (props: ConfigArgs) => ConfigReturnType;
