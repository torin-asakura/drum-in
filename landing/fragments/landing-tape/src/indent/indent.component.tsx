import React         from 'react'

import { DramsIcon } from '@ui/icons'
import { Box }       from '@ui/layout'

const Indent = () => (
  <Box flexShrink={0} width={[90, 135, 180]} alignItems='center' justifyContent='center'>
    <Box width={[30, 45, 60]} height={[30, 45, 60]}>
      <DramsIcon width='100%' height='100%' />
    </Box>
  </Box>
)

export { Indent }
