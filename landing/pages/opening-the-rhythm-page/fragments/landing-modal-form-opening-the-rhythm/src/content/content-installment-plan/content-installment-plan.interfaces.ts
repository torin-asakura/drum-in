import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ContentInstallmentPlanProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  amount: number
  recalculate: (price: number, operation: boolean) => void
}
