import type { Network } from '@/config'
import { chainIds, networks } from '@/config'
import type { PublicClient, WalletClient } from 'viem'
import { z } from 'zod'

export const configArgsSchema = z
  .object({
    chain: z
      .string()
      .refine((val) => networks.includes(val as Network), {
        message: `Chain must be one of [${networks.join(', ')}]`,
      })
      .default('holesky') as z.ZodType<Network>,
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
  })
  .refine(
    (val) => {
      const publicClient = val.publicClient as PublicClient
      const walletClient = val.walletClient as WalletClient
      if (publicClient.chain?.id !== walletClient.chain?.id) {
        return false
      }
      return true
    },
    {
      message: 'Public and wallet client chains must be the same',
    },
  ) as z.ZodType<ConfigArgs>
export type ConfigArgs = {
  chain: Network
  beaconchainUrl: string
  publicClient: PublicClient
  walletClient: WalletClient
}
