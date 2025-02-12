import type { StrategyWeight } from '@/types/weights'
import type { Address } from 'abitype'

interface CoefficientDefinition {
  token: Address
  coefficient: number
}

export interface WeightCalculationOptions {
  coefficients: CoefficientDefinition[]
  validatorCoefficient?: number
}

const calculateWeightTotals = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number = 0,
): { totalWeight: number; totalCoefficient: number } =>
  coefficients.reduce(
    (accumulator, coefficient) => ({
      totalWeight:
        accumulator.totalWeight +
        (strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coefficient.token)
          ?.weight || 0) *
          coefficient.coefficient,
      totalCoefficient: accumulator.totalCoefficient + coefficient.coefficient,
    }),
    {
      totalWeight: (strategy.validatorBalanceWeight || 0) * validatorCoefficient,
      totalCoefficient: validatorCoefficient,
    },
  )

const calculateHarmonicSum = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number,
): number =>
  1 /
  coefficients.reduce(
    (sum, coefficient) =>
      sum +
      coefficient.coefficient /
        (strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coefficient.token)
          ?.weight || 0),
    validatorCoefficient / (strategy.validatorBalanceWeight || 1),
  )

const calculateWeightedLogSum = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number,
): { logSum: number; totalCoefficient: number } =>
  coefficients.reduce(
    (accumulator, coefficient) => ({
      logSum:
        accumulator.logSum +
        coefficient.coefficient *
          Math.log(
            strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coefficient.token)
              ?.weight || 1,
          ),
      totalCoefficient: accumulator.totalCoefficient + coefficient.coefficient,
    }),
    {
      logSum: validatorCoefficient * Math.log(strategy.validatorBalanceWeight || 1),
      totalCoefficient: validatorCoefficient,
    },
  )

/**
 * Calculate strategy weights using arithmetic weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcSimpleStrategyWeights = (
  strategyTokenWeights: StrategyWeight[],
  { coefficients, validatorCoefficient = 0 }: WeightCalculationOptions,
): Map<string, number> => {
  const strategyWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const { totalWeight, totalCoefficient } = calculateWeightTotals(
      strategy,
      coefficients,
      validatorCoefficient,
    )
    return weightMap.set(strategy.id, totalWeight / totalCoefficient)
  }, new Map<string, number>())

  return strategyWeights
}

/**
 * Calculate strategy weights using harmonic weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcHarmonicStrategyWeights = (
  strategyTokenWeights: StrategyWeight[],
  { coefficients, validatorCoefficient = 0 }: WeightCalculationOptions,
): Map<string, number> => {
  const normalizationCoefficient = strategyTokenWeights.reduce(
    (sum, strategy) => sum + calculateHarmonicSum(strategy, coefficients, validatorCoefficient),
    0,
  )

  const strategyWeights = strategyTokenWeights.reduce(
    (weightMap, strategy) =>
      weightMap.set(
        strategy.id,
        calculateHarmonicSum(strategy, coefficients, validatorCoefficient) /
          normalizationCoefficient,
      ),
    new Map<string, number>(),
  )

  return strategyWeights
}

/**
 * Calculate strategy weights using geometric weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcGeometricStrategyWeights = (
  strategyTokenWeights: StrategyWeight[],
  { coefficients, validatorCoefficient = 0 }: WeightCalculationOptions,
): Map<string, number> => {
  const strategyWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const { logSum, totalCoefficient } = calculateWeightedLogSum(
      strategy,
      coefficients,
      validatorCoefficient,
    )
    return weightMap.set(strategy.id, Math.exp(logSum / totalCoefficient))
  }, new Map<string, number>())

  return strategyWeights
}
