import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ContentProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  onClose?: () => any
  roleVar: Array<string>
  options: Array<{
    value: string
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: (value: Array<string>) => any
}

export interface Content {
  amount: number
  recalculateAmount: (price: number, operation: boolean) => void
  months: number
  recalculateMonths: (months: number, operation: boolean) => void
}
