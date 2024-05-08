import { SetStateAction } from 'react'
import { Dispatch }       from 'react'

export interface ConsultationContentProps {
  setVisibleModal: Dispatch<SetStateAction<boolean>>
}
