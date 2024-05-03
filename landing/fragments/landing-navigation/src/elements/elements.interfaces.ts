import { ConsultationDataProps }     from '@globals/data'
import { ConsultationFormDataProps } from '@globals/data'
import { IndividualCourseDataProps } from '@globals/data'
import { MainCourseDataProps }       from '@globals/data'

export interface ElementsProps {
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
  list?: {
    title?: string | null
    items?: {
      nodes: Array<MainCourseDataProps | IndividualCourseDataProps>
    } | null
  } | null
  stateHover: boolean
}
