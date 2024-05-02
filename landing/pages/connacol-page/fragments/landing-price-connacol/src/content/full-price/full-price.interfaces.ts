import { PaymentSettingsDataProps } from '@globals/data/src'
import { IndividualCourseDataType } from '@globals/data/src'

export interface FullPriceProps {
  fullCost: string
  connacolData: IndividualCourseDataType
  paymentSettingsData: PaymentSettingsDataProps
}
