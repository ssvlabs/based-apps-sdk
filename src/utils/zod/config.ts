import { chainIds, networks } from '@/config'
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

      if (!chainIds.includes(client.chain?.id as (typeof chainIds)[number])) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Public client chain must be one of [${networks.join(', ')}]`,
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

      if (!chainIds.includes(client.chain?.id as (typeof chainIds)[number])) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Wallet client chain must be one of [${networks.join(', ')}]`,
        })
        return false
      }

      return true
    }),
    _: z
      .object({
        subgraphUrl: z.string().url().optional(),
        contractAddress: z.string().optional(),
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

console.log('testing trigger')
export type ConfigArgs = {
  beaconchainUrl: string
  publicClient: PublicClient
  walletClient: WalletClient
  _?: {
    subgraphUrl?: string
    contractAddress?: Address
  }
}
