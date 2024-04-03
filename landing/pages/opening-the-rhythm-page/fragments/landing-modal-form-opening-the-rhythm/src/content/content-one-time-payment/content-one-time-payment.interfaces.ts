import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ContentOneTimePaymentProps {
  amount: number
  recalculate: (price: number, operation: boolean) => void
  openingTheRhythm?: OpeningTheRhythmDataProps | null
}
