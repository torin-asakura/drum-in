import { StudentDataListProps } from '@globals/data/src'
import { StudentsDataProps }    from '@globals/data/src'

export interface StudentsBlockProps {
  mainData?: StudentsDataProps | null
  studentsData?: StudentDataListProps | null
}
