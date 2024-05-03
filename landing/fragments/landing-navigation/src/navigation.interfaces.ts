import { SetStateAction }            from 'react'
import { Dispatch }                  from 'react'

import { ConsultationDataProps }     from '@globals/data/src'
import { ConsultationFormDataProps } from '@globals/data/src'
import { HeaderDataProps }           from '@globals/data/src'

export interface NavigationProps {
  headerData?: HeaderDataProps | null
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
}
