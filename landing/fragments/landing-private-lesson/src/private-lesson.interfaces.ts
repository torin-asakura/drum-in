import { ConsultationDataProps }     from '@globals/data/src'
import { ConsultationFormDataProps } from '@globals/data/src'
import { IndividualLessonDataProps } from '@globals/data/src'

export interface PrivateLessonBlockProps {
  privateLessonData?: IndividualLessonDataProps | null
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
}
