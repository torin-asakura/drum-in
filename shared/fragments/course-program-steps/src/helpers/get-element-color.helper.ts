/* eslint-disable no-eval */

export const getElementColor = (
  progress: number,
  comparisonOperator: string,
  percent: number
): string => (eval(`progress ${comparisonOperator} percent`) ? 'white' : 'gray')
