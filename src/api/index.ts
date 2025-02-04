import type { createBAMQueries, createBeaconChainAPI, createQueries } from '@/main'

export type APIs = {
  ssv: ReturnType<typeof createQueries>
  beacon: ReturnType<typeof createBeaconChainAPI>
  bam: ReturnType<typeof createBAMQueries>
}
