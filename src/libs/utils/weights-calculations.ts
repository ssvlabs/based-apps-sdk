import type { StrategyWeight } from '@/types/weights'
import type { Address } from 'abitype'

interface CoefficientDefinition {
  token: Address
  coefficient: number
}

export interface WeightCalculationParams {
  strategyTokenWeights: StrategyWeight[]
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
 * @param {WeightCalculationParams} params - Parameters for weight calculation
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcSimpleStrategyWeights = ({
  strategyTokenWeights,
  coefficients,
  validatorCoefficient = 0,
}: WeightCalculationParams): Map<string, number> => {
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
 * @param {WeightCalculationParams} params - Parameters for weight calculation
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcHarmonicStrategyWeights = ({
  strategyTokenWeights,
  coefficients,
  validatorCoefficient = 0,
}: WeightCalculationParams): Map<string, number> => {
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

  console.info(
    `Final Strategy weights: ${JSON.stringify(Object.fromEntries(strategyWeights), undefined, 2)}`,
  )
  return strategyWeights
}

/**
 * Calculate strategy weights using geometric weighted average.
 * @param {WeightCalculationParams} params - Parameters for weight calculation
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcGeometricStrategyWeights = ({
  strategyTokenWeights,
  coefficients,
  validatorCoefficient = 0,
}: WeightCalculationParams): Map<string, number> => {
  console.info('Using weighted geometric average to calculate Strategy weights.')

  const strategyWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const { logSum, totalCoefficient } = calculateWeightedLogSum(
      strategy,
      coefficients,
      validatorCoefficient,
    )
    return weightMap.set(strategy.id, Math.exp(logSum / totalCoefficient))
  }, new Map<string, number>())

  console.info(
    `Final Strategy weights: ${JSON.stringify(Object.fromEntries(strategyWeights), undefined, 2)}`,
  )
  return strategyWeights
}
