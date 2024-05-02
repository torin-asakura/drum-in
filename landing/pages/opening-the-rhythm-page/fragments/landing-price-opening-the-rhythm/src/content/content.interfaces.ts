import { PaymentSettingsDataProps }  from '@globals/data/src'
import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ContentProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  paymentSettingsData: PaymentSettingsDataProps
}
