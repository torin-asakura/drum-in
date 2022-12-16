import React             from 'react'

import { FaqBlock }      from '@landing/faq'
import { Hero }          from '@landing/hero-fragment'
import { StudentsBlock } from '@landing/learning-students'
import { Middle }        from '@landing/middle-fragment'
import { Box }           from '@ui/layout'

export const HomePage = () => (
  <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
    <Hero />
    <Middle />
    <StudentsBlock />
    <FaqBlock />
  </Box>
)

export default HomePage
