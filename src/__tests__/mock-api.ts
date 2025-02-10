import type { APIs } from '@/api'
import { vi } from 'vitest'

export const mockGetValidatorsByAccount = vi.fn()
export const mockGetValidatorBalances = vi.fn()
export const mockGetStrategyBAppOptIns = vi.fn()
export const mockGetParticipantWeightInput = vi.fn()
export const mockGetObligatedBalances = vi.fn()
export const mockGetBAppDelegators = vi.fn()

export const mockAPIs = {
  dvt: {
    getValidatorsByAccount: mockGetValidatorsByAccount,
  },
  beacon: {
    getValidatorBalances: mockGetValidatorBalances,
  },
  bam: {
    getStrategyBAppOptIns: mockGetStrategyBAppOptIns,
    getParticipantWeightInput: mockGetParticipantWeightInput,
    getObligatedBalances: mockGetObligatedBalances,
    getBAppDelegators: mockGetBAppDelegators,
  },
} satisfies APIs
