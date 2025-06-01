import { Address, PublicClient, WalletClient } from 'viem';
import { z } from 'zod';
export declare const configArgsSchema: z.ZodType<ConfigArgs>;
export type ConfigArgs = {
    beaconchainUrl: string;
    publicClient: PublicClient;
    walletClient: WalletClient;
    extendedConfig?: {
        subgraph?: {
            url?: string;
            apiKey?: string;
        };
        contract?: Address;
    };
};
