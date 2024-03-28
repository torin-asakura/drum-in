import { IndividualCourseDataType } from '@globals/data/src'

export interface ModalFormFifthDimensionProps {
  fifthDimensionData: IndividualCourseDataType

  activeRender: boolean
  onClose: () => any
  scroll?: boolean
}
