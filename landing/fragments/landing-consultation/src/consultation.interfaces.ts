import { SetStateAction }             from 'react'
import { Dispatch }                   from 'react'

import { ConsultationFormDataProps }  from '@globals/data/src'
import { ModalConsultationDataProps } from '@globals/data/src'

export interface ConsultationProps {
  activeRender: boolean
  setVisibleModal: Dispatch<SetStateAction<boolean>>
  scroll?: boolean
}
