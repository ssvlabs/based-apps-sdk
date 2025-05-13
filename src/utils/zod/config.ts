import type { Address, PublicClient, WalletClient } from 'viem'
import { z } from 'zod'

export const configArgsSchema = z
  .object({
    beaconchainUrl: z.string().url(),
    publicClient: z.custom().superRefine((val, ctx) => {
      const client = val as PublicClient | undefined
      if (!client) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Public client must be provided',
        })
        return false
      }

      if (client.chain === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Public client must have a chain property',
        })
        return false
      }

      return true
    }),
    walletClient: z.custom().superRefine((val, ctx) => {
      const client = val as WalletClient | undefined
      if (!client) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Wallet client must be provided',
        })
        return false
      }

      if (client.chain === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Wallet client must have a chain property',
        })
        return false
      }

      return true
    }),
    extendedConfig: z
      .object({
        subgraph: z
          .object({
            url: z.string().url().optional(),
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
