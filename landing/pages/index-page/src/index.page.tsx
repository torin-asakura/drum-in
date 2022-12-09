import React      from 'react'

import { Hero }   from '@landing/hero-fragment'
import { Middle } from '@landing/middle-fragment'
import { Box }    from '@ui/layout'

export const HomePage = () => (
  <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
    <Hero />
    <Middle />
  </Box>
)

export default HomePage
