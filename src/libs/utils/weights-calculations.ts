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

const calculateCoefficientsSum = (coefficients: CoefficientDefinition[]): number =>
  coefficients.reduce((acc, coeff) => acc + coeff.coefficient, 0)

/**
 * Creates a map of weights for a given strategy, for each of the tokens that have a coefficient. If the strategy has no weight, 0 is assigned
 * @param {StrategyWeight} strategy strategy weights
 * @param {CoefficientDefinition[]} coefficients
 * @returns {Map<string, number>} - Map of token addresses to their related weight for the given strategy.
 */
const fillTokenWeightsMap = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
): Map<string, number> =>
  new Map(
    coefficients.map((coeff) => [
      coeff.token,
      strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coeff.token)?.weight || 0,
    ]),
  )
/**
 *  * calculates the numerator of a weighted arithmetic mean: the sum of the multiplication between each value and its related weight (coefficient)
 * @param {StrategyWeight} strategy - strategy weights
 * @param {CoefficientDefinition[]} coefficients - coefficients for various tokens
 * @param {number} validatorCoefficient - coefficient for the validator balance of a strategy
 * @returns {number} - the numerator of a weighted arithmetic mean
 */
const calculateWeightTotals = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number = 0,
): number =>
  coefficients.reduce(
    (sum, coefficient) => {
      const tokenWeightsMap: Map<string, number> = fillTokenWeightsMap(strategy, coefficients)
      return sum + (tokenWeightsMap.get(coefficient.token) || 0) * coefficient.coefficient
    },
    (strategy.validatorBalanceWeight || 0) * validatorCoefficient,
  )

  /**
   * 
 * calculates the denominator of a weighted harmonic mean: the sum of the ratios between the weight (coefficient) of a value, and the value itself
 * @param {StrategyWeight} strategy - strategy weights
 * @param {CoefficientDefinition[]} coefficients - coefficients for various tokens
 * @param {number} validatorCoefficient - coefficient for the validator balance of a strategy
 * @returns {number} - the denominator of a weighted harmonic mean
   */
const calculateWeightedRatioSum = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number,
): number => {
  // initialize the return value
  let weightCoeffRatioSum = 0

  // if the validator balance weight is zero
  // the ratio would be infinite, so we return zero
  if (!strategy.validatorBalanceWeight) return weightCoeffRatioSum

  const tokenWeightsMap: Map<string, number> = fillTokenWeightsMap(strategy, coefficients)

  // if any of the weight is zero
  // the ratio would be infinite, so we return zero
  if (Array.from(tokenWeightsMap.values()).some((item) => item == 0)) return weightCoeffRatioSum

  weightCoeffRatioSum = coefficients.reduce(
    (sum, coeff) => sum + coeff.coefficient / (tokenWeightsMap.get(coeff.token) || 1),
    validatorCoefficient / strategy.validatorBalanceWeight,
  )

  return weightCoeffRatioSum
}

/**
 * calculates the numerator of a weighted geometric mean: the sum of the logarithm of each value, multiplied by its weight (coefficient)
 * @param {StrategyWeight} strategy - strategy weights
 * @param {CoefficientDefinition[]} coefficients - coefficients for various tokens
 * @param {number} validatorCoefficient - coefficient for the validator balance of a strategy
 * @returns {number} - the numerator of a weighted geometric mean
 */
const calculateWeightedLogSum = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number,
): number => {
  // initialize the return value
  let weightedLogSum = 0

  // if the validator balance weight is zero, THE ENTIRE LOG SUM is zero
  if (!strategy.validatorBalanceWeight) return weightedLogSum

  const tokenWeightsMap: Map<string, number> = fillTokenWeightsMap(strategy, coefficients)

  // if any of the weight is zero, THE ENTIRE LOG SUM is zero
  if (Array.from(tokenWeightsMap.values()).some((item) => item == 0)) return weightedLogSum

  // because it's been assessed that all tokens' weights are present and non-zero
  // it's possible to extract them from the map, and calculate the log()
  weightedLogSum = coefficients.reduce(
    (acc, coeff) => acc + coeff.coefficient * Math.log(tokenWeightsMap.get(coeff.token) || 0),
    validatorCoefficient * Math.log(strategy.validatorBalanceWeight),
  )

  return weightedLogSum
}

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
    const totalCoefficient = calculateCoefficientsSum(coefficients)
    const totalWeight = calculateWeightTotals(strategy, coefficients, validatorCoefficient)
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
  // the numerator of weighted harmonic is the sum of all weights (coefficients)
  const coeffSum = calculateCoefficientsSum(coefficients)

  const unnormalizedWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    // the denominator of weighted harmonic is the sum of all ratios between the value and its related weight (coefficient)
    const denom = calculateWeightedRatioSum(strategy, coefficients, validatorCoefficient)
    // if one of the nominators is 0, we should not calculate division, the entire weight is zero
    const finalWeight = denom != 0 ? coeffSum / denom : 0
    return weightMap.set(strategy.id, finalWeight)
  }, new Map<string, number>())

  // Calculate sum for normalization
  const weightSum = Array.from(unnormalizedWeights.values()).reduce(
    (sum, weight) => sum + weight,
    0,
  )

  // Normalize weights to sum to 1
  const normalizedWeights = new Map<string, number>()
  for (const [id, weight] of unnormalizedWeights.entries()) {
    normalizedWeights.set(id, weight / weightSum)
  }

  return normalizedWeights
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
  // First calculate unnormalized weights
  const unnormalizedWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const totalCoefficient = calculateCoefficientsSum(coefficients)
    const logSum = calculateWeightedLogSum(strategy, coefficients, validatorCoefficient)
    // if one of the nominators is 0, we should not calculate exponential, the entire weight is zero
    const finalWeight = logSum != 0 ? Math.exp(logSum / totalCoefficient) : 0
    return weightMap.set(strategy.id, finalWeight)
  }, new Map<string, number>())

  // Calculate sum for normalization
  const weightSum = Array.from(unnormalizedWeights.values()).reduce(
    (sum, weight) => sum + weight,
    0,
  )

  // Normalize weights to sum to 1
  const normalizedWeights = new Map<string, number>()
  for (const [id, weight] of unnormalizedWeights.entries()) {
    normalizedWeights.set(id, weight / weightSum)
  }

  return normalizedWeights
}
