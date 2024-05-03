import { ConsultationDataProps }     from '@globals/data'
import { ConsultationFormDataProps } from '@globals/data'
import { HeaderDataProps }           from '@globals/data'

export interface HeaderProps {
  headerData?: HeaderDataProps | null
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
}
