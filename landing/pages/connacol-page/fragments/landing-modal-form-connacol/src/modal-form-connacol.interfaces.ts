import { IndividualCourseDataType } from '@globals/data'
import { RolePaymentForm }          from '@shared/constants'

export interface ModalFormConnacolProps {
  paymentPlan?: RolePaymentForm
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
  connacolData: IndividualCourseDataType
}
