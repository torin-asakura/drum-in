import React           from 'react'
import { FC }          from 'react'
import { memo }        from 'react'

import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'

import { IndentProps } from './indent.interfaces'

const Indent: FC<IndentProps> = memo(({ path }) => (
  <Box flexShrink={0} width={[90, 135, 160]} alignItems='center' justifyContent='center'>
    <Box width={[30, 45, 60]} height={[30, 45, 60]}>
      <ImageBlock src={path || ''} />
    </Box>
  </Box>
))

export { Indent }
