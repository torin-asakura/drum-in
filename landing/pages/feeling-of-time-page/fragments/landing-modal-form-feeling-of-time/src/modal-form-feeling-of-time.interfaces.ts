import { IndividualCourseDataType } from '@globals/data/src'
import { RolePaymentForm }          from '@shared/constants/src'

export interface ModalFormFeelingOfTimeProps {
  paymentPlan?: RolePaymentForm

  feelingOfTimeData: IndividualCourseDataType
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
}
