import { IndividualCourseDataType } from '@globals/data/src'

export interface ModalFormSeventhHeavenProps {
  seventhHeavenData: IndividualCourseDataType
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
}
