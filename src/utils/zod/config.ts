import { z } from 'zod'

export const configArgsSchema = z.object({
  beaconchainUrl: z.string().url(),
  dvtGraphUrl: z.string().url(),
  bamGraphUrl: z.string().url(),
})
export type ConfigArgs = z.infer<typeof configArgsSchema>
