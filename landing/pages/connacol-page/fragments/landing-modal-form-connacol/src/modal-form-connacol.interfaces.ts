import { IndividualCourseDataType } from '@globals/data'

export interface ModalFormConnacolProps {
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
  connacolData: IndividualCourseDataType
}
