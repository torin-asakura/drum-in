import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

import { SkillsToLearnMobile } from './skills-to-learn-mobile.component'
import { SkillsToLearnDesktop } from './skills-to-learn-desktop.component'

const SkillsToLearn = () => (
  <Box width={['320px', '320px', '1440px']} border='1px solid black' position='relative' zIndex={1}>
    <Box
      width='105px'
      height='3942px'
      position='absolute'
      display={['flex', 'flex', 'none']}
      border='1px solid black'
      zIndex={-1}
      left={225}
    />
    <Column width='100%' alignItems='center'>
      <Layout flexBasis={25} flexShrink={0} />
      <SkillsToLearnMobile/>
      <SkillsToLearnDesktop/>
    </Column>
  </Box>
)

export { SkillsToLearn }
