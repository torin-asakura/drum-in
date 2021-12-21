import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'

import { LineProps } from './line.interface'

const Line: FC<LineProps> = ({ height }) => (
  <Box
    backgroundColor='dullRed'
    position='absolute'
    width={['115px', '115px', '375px']}
    right='0px'
    height={height}
    display='flex'
  />
)

export { Line }
