import React                   from 'react'

import { AfterTheCourseBlock } from '@landing/after-the-course-fragment'
import { BannerCourseBlock }   from '@landing/banner-course-fragment'
import { SkillsBlock }         from '@landing/skills-fragment'
import { Background }          from '@ui/background'

const HeroCourse = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='transparentPurpleBlueImageGradient'
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center bottom'
    >
      <BannerCourseBlock />
      <AfterTheCourseBlock />
      <SkillsBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueSmallImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='right center'
    >
      <BannerCourseBlock />
      <AfterTheCourseBlock />
      <SkillsBlock />
    </Background>
  </>
)

export { HeroCourse }
