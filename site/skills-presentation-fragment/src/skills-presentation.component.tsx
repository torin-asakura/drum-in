import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'

import { SkillsPresentationDesktop } from './skills-presentation-desktop.component'
import { SkillsPresentationMobile }  from './skills-presentation-mobile.component'

const SkillsPresentation: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['1075px', '1075px', '585px']}
    border='1px solid black'
  >
    <SkillsPresentationDesktop />
    <SkillsPresentationMobile />
  </Box>
)

export { SkillsPresentation }
