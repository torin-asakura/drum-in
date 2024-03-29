import { IndividualCourseDataProps } from '@globals/data/src'
import { MainCourseDataProps }       from '@globals/data/src'

export interface MainCourseProps {
  mainCourse:
    | {
        description?: string | null | undefined
        course?: { nodes: (MainCourseDataProps | IndividualCourseDataProps)[] } | null | undefined
      }
    | null
    | undefined
}
