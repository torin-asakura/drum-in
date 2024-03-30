import { SetStateAction }  from 'react'
import { Dispatch }        from 'react'

import { HeaderDataProps } from '@globals/data/src'

export interface NavigationProps {
  headerData: HeaderDataProps
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}
