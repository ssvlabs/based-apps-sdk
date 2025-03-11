import { PublicClient, WalletClient } from 'viem';
import { z } from 'zod';
export declare const configArgsSchema: z.ZodType<ConfigArgs, z.ZodTypeDef, ConfigArgs>;
export type ConfigArgs = {
    beaconchainUrl: string;
    publicClient: PublicClient;
    walletClient: WalletClient;
};
