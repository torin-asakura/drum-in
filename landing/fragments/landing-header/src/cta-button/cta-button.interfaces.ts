import { ConsultationDataProps }     from '@globals/data/src'
import { ConsultationFormDataProps } from '@globals/data/src'

export interface CtaButtonProps {
  title?: string | null
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
}
