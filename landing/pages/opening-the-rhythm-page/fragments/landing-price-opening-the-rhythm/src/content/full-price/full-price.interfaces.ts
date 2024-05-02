import { PaymentSettingsDataProps }  from '@globals/data/src'
import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface FullPriceProps {
  fullCost: string
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  paymentSettingsData: PaymentSettingsDataProps
}
