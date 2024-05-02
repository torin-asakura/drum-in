import { PaymentSettingsDataProps } from '@globals/data'
import { IndividualCourseDataType } from '@globals/data'

export interface ContentProps {
  onClose?: () => any
  polyrhythmicKeysData: IndividualCourseDataType
  paymentSettingsData: PaymentSettingsDataProps
}
