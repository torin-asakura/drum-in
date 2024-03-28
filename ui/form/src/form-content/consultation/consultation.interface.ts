import { SetStateAction } from 'react'
import { Dispatch }       from 'react'

export interface ConsultationProps {
  amount?: number
  arrow: boolean
  onSuccess: (...args) => any
  onFailure: (...args) => any
  privacyPolicy: boolean
  setPrivacyPolicy: Dispatch<SetStateAction<boolean>>
}
