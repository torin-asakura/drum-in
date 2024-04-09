import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ContentInstallmentPlanProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  amount: number
  recalculateAmount: (price: number, operation: boolean) => void
  months?: number
  recalculateMonths?: (months: number, operation: boolean) => void
}
