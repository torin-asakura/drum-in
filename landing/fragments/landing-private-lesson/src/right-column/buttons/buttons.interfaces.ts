import { ConsultationDataProps }     from '@globals/data/src'
import { ConsultationFormDataProps } from '@globals/data/src'
import { IndividualLessonDataProps } from '@globals/data/src'

export interface ButtonsProps {
  privateLessonData?: IndividualLessonDataProps | null
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
}
