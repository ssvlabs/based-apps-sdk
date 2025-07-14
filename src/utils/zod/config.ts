import type { Address, PublicClient, WalletClient } from 'viem'
import { z } from 'zod'

export const configArgsSchema = z
  .object({
    beaconchainUrl: z.url(),
    publicClient: z
      .any()
      .refine((val) => !!val, { message: 'Public client must be provided' })
      .refine((val) => typeof val === 'object' && val !== null && 'chain' in val, {
        message: 'Public client must have a chain property',
      }),
    walletClient: z
      .any()
      .refine((val) => !!val, { message: 'Wallet client must be provided' })
      .refine((val) => typeof val === 'object' && val !== null && 'chain' in val, {
        message: 'Wallet client must have a chain property',
      }),

    extendedConfig: z
      .object({
        subgraph: z
          .object({
            url: z.url().optional(),
            apiKey: z.string().optional(),
          })
          .optional(),
        contract: z.string().optional(),
      })
      .optional(),
  })
  .refine(
    (val) => {
      const publicClient = val.publicClient as PublicClient
      const walletClient = val.walletClient as WalletClient
      return publicClient?.chain?.id === walletClient?.chain?.id
    },
    {
      message: 'Public and wallet client chains must be the same',
    },
  ) as z.ZodType<ConfigArgs>

export type ConfigArgs = {
  beaconchainUrl: string
  publicClient: PublicClient
  walletClient: WalletClient
  extendedConfig?: {
    subgraph?: {
      url?: string
      apiKey?: string
    }
    contract?: Address
  }
}
