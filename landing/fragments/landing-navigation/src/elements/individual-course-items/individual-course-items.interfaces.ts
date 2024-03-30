import { IndividualCourseDataProps } from '@globals/data/src'
import { MainCourseDataProps }       from '@globals/data/src'

export interface IndividualCourseItemsProps {
  individualCoursesData?: (MainCourseDataProps | IndividualCourseDataProps)[]
  stateHover: boolean
}
