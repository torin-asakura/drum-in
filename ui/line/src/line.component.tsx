import React   from 'react'
import { FC }  from 'react'

import { Box } from '@ui/layout'

const Line: FC<string | string[]> = ({ height }) => (
  <Box
    backgroundColor='dullRed'
    position='absolute'
    width='115px'
    right='0px'
    height={height}
    display='flex'
  />
)

export { Line }
