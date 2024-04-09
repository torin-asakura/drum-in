import { SetStateAction }  from 'react'
import { Dispatch }        from 'react'

import { HeaderDataProps } from '@globals/data/src'

export interface NavigationProps {
  headerData?: HeaderDataProps | null
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}
