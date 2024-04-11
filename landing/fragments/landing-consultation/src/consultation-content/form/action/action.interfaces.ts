import { SetStateAction }              from 'react'
import { Dispatch }                    from 'react'

import { SubmitConsultationFormProps } from '@globals/data'

export interface ActionProps {
  fields: SubmitConsultationFormProps
  checkboxText?: string | null
  submitText?: string | null
  setVisibleModal: Dispatch<SetStateAction<boolean>>
}
