import type { APIs } from '@/api'
import { vi } from 'vitest'

export const mockGetValidatorsByAccount = vi.fn()
export const mockGetValidatorBalances = vi.fn()
export const mockGetStrategyBAppOptIns = vi.fn()
export const mockGetParticipantWeightInput = vi.fn()
export const mockGetObligatedBalances = vi.fn()
export const mockGetBAppDelegators = vi.fn()
export const mockGetBappMetadataURI = vi.fn()
export const mockGetAllBappsMetadataURIs = vi.fn()
export const mockGetAllStrategyObligatedBalancesForBapp = vi.fn()
export const mockGetDepositedBalancesForStrategy = vi.fn()
export const mockGetAllStrategiesDepositedTo = vi.fn()
export const mockGetTotalDelegatedPercentageForAccount = vi.fn()
export const mockGetAllStrategiesForBapp = vi.fn()
export const mockGetAllStrategiesForAccount = vi.fn()

export const mockAPIs: APIs = {
  beacon: {
    getValidatorBalances: mockGetValidatorBalances,
  },
  bam: {
    getStrategyBAppOptIns: mockGetStrategyBAppOptIns,
    getParticipantWeightInput: mockGetParticipantWeightInput,
    getObligatedBalances: mockGetObligatedBalances,
    getBAppDelegators: mockGetBAppDelegators,
    getValidatorsByAccount: mockGetValidatorsByAccount,
    getBappMetadataURI: mockGetBappMetadataURI,
    getAllBappsMetadataURIs: mockGetAllBappsMetadataURIs,
    getAllStrategyObligatedBalancesForBapp: mockGetAllStrategyObligatedBalancesForBapp,
    getDepositedBalancesForStrategy: mockGetDepositedBalancesForStrategy,
    getAllStrategiesDepositedTo: mockGetAllStrategiesDepositedTo,
    getTotalDelegatedPercentageForAccount: mockGetTotalDelegatedPercentageForAccount,
    getAllStrategiesForBapp: mockGetAllStrategiesForBapp,
    getAllStrategiesForAccount: mockGetAllStrategiesForAccount,
  },
}
