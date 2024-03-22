import { SetStateAction } from 'react'
import { Dispatch }       from 'react'

export interface NavigationProps {
  headerData: any
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}
