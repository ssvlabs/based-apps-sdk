import type { createBAMQueries, createBeaconChainAPI } from '@/main'

export type APIs = {
  beacon: ReturnType<typeof createBeaconChainAPI>
  bam: ReturnType<typeof createBAMQueries>
}
