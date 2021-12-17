import React   from 'react'
import { FC }  from 'react'

import { Box } from '@ui/layout'

const BackgroundField: FC = () => (
  <>
    <Box width='100px' backgroundColor='transparent' />
    <Box width='105px' backgroundColor='dullRed' />
  </>
)

export { BackgroundField }
