import type { Network } from '@/config'
import { networks } from '@/config'
import { z } from 'zod'

export const configArgsSchema = z.object({
  chain: z
    .string()
    .refine((val) => networks.includes(val as Network), {
      message: `Chain must be one of [${networks.join(', ')}]`,
    })
    .default('holesky') as z.ZodType<Network>,
  beaconchainUrl: z.string().url(),
})
export type ConfigArgs = z.infer<typeof configArgsSchema>
