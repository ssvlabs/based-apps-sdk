import type { SDKEnvironment, SupportedChainsIDs } from '@/config'
import { chainIds } from '@/config'
import { z } from 'zod'

export const configArgsSchema = z.object({
  // walletClient: z.custom<WalletClient>((val) => typeof val === 'object' && val !== null, {}),
  // publicClient: z.custom<publicClient>((val) => typeof val === 'object' && val !== null, {}),
  chain: z
    .number()
    .refine((val) => chainIds.includes(val as SupportedChainsIDs), {
      message: 'Chain must be one of ' + chainIds.join(', '),
    })
    .default(17000) as z.ZodType<SupportedChainsIDs>,
  env: z.enum(['stage', 'prod']).default('prod') as z.ZodType<SDKEnvironment>,
})

export type ConfigArgs = {
  chain: SupportedChainsIDs
  env?: SDKEnvironment
}
