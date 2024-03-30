import { IndividualCourseDataProps } from '@globals/data'
import { MainCourseDataProps }       from '@globals/data'

export interface ElementsProps {
  list?:{
         title?: string | null
         items?: {
                   nodes: Array<
                     | MainCourseDataProps
                     | IndividualCourseDataProps
                     >
                 } | null
       } | null
  stateHover: boolean
}
