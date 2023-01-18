import React              from 'react'
import { FC }             from 'react'

import { ActiveProvider } from './context'
import { SwitchProps }    from './switch.interface'

const Switch: FC<SwitchProps> = ({ active, children }) => (
  <ActiveProvider value={active}>{children}</ActiveProvider>
)

export { Switch }
