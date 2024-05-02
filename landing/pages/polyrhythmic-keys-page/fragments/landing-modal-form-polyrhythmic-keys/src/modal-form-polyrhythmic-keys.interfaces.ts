import { PaymentSettingsDataProps } from '@globals/data'
import { IndividualCourseDataType } from '@globals/data'
export interface ModalFormPolyrhythmicKeyslProps {
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
  polyrhythmicKeysData: IndividualCourseDataType
  paymentSettingsData: PaymentSettingsDataProps
}
