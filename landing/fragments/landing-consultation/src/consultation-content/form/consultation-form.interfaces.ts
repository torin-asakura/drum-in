import { Dispatch }       from 'react'
import { SetStateAction } from 'react'

export interface ConsultationFormProps {
  textForCheckbox?: string | null
  setVisibleModal: Dispatch<SetStateAction<boolean>>
}
