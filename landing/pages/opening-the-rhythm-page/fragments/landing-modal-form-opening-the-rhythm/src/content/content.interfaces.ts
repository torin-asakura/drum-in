import { SetStateAction }            from 'react'
import { Dispatch }                  from 'react'

import { OpeningTheRhythmDataProps } from '@globals/data/src'
import { RolePaymentForm }           from '@shared/constants'

export interface ContentProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  onClose?: () => any
  roleVar: Array<RolePaymentForm>
  options: Array<{
    value: RolePaymentForm
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: Dispatch<SetStateAction<Array<RolePaymentForm>>>
}

export interface Content {
  amount: number
  recalculateAmount: (price: number, operation: boolean) => void
  months: number
  recalculateMonths: (months: number, operation: boolean) => void
}
