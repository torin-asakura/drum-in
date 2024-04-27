import { Dispatch }                  from 'react'
import { SetStateAction }            from 'react'

import { ConsultationFormDataProps } from '@globals/data/src'

export interface ConsultationFormProps {
  textForCheckbox?: string | null
  setVisibleModal: Dispatch<SetStateAction<boolean>>
  consultationFormData?: ConsultationFormDataProps
}
