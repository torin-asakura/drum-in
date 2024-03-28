import { IndividualCourseDataType } from '@globals/data/src'

export interface ModalFormFeelingOfTimeProps {
  feelingOfTimeData: IndividualCourseDataType
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
}
