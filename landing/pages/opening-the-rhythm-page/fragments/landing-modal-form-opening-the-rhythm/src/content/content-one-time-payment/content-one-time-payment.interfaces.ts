import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ContentOneTimePaymentProps {
  amount: number
  recalculateAmount: (price: number, operation: boolean) => void
  openingTheRhythm?: OpeningTheRhythmDataProps | null
}
