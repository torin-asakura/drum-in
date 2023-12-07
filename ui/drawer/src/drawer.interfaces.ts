import { ReactElement } from 'react'

export interface DrawerProps {
  active: boolean
  onClose: () => any
  children?: (hover: boolean) => ReactElement<any>
}
