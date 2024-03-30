import { IndividualCourseDataProps } from '@globals/data'
import { MainCourseDataProps }       from '@globals/data'

export interface MainCourseItemProps {
  mainCourseData?: MainCourseDataProps | IndividualCourseDataProps | null
  stateHover: boolean
}
