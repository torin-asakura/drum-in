import { StudentDataListProps } from '@globals/data/src'

export interface ModalWindowProps {
  active: boolean
  onClose: () => any
  studentsData?: StudentDataListProps | null
}
