import { IndividualCourseDataType } from '@globals/data/src'
import { RolePaymentForm }          from '@shared/constants/src'

export interface ModalFormFifthDimensionProps {
  fifthDimensionData: IndividualCourseDataType
  paymentPlan?: RolePaymentForm
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
}
