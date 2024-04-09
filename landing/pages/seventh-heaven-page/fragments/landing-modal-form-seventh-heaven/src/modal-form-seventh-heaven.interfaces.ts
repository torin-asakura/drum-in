import { IndividualCourseDataType } from '@globals/data/src'
import { RolePaymentForm }          from '@shared/constants/src'

export interface ModalFormSeventhHeavenProps {
  paymentPlan?: RolePaymentForm
  seventhHeavenData: IndividualCourseDataType
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
}
