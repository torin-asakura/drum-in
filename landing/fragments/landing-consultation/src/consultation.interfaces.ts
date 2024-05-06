import { SetStateAction } from 'react'
import { Dispatch }       from 'react'

export interface ConsultationProps {
  activeRender: boolean
  setVisibleModal: Dispatch<SetStateAction<boolean>>
  scroll?: boolean
}
