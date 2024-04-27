import { SetStateAction }             from 'react'
import { Dispatch }                   from 'react'

import { ConsultationFormDataProps }  from '@globals/data/src'
import { ModalConsultationDataProps } from '@globals/data/src'

export interface ConsultationContentProps {
  setVisibleModal: Dispatch<SetStateAction<boolean>>
  consultationData?: ModalConsultationDataProps | null
  consultationFormData?: ConsultationFormDataProps
}
