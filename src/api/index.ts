import type { createBAMQueries, createBeaconChainAPI, createQueries } from '@/main'

export type APIs = {
  dvt: ReturnType<typeof createQueries>
  beacon: ReturnType<typeof createBeaconChainAPI>
  bam: ReturnType<typeof createBAMQueries>
}
