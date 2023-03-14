import React                           from 'react'

import { AfterTheCourseBlock }         from '@landing/after-the-course-fragment'
import { BannerOpeningTheRhythmBlock } from '@landing/banner-opening-the-rhythm-fragment'
import { SkillsBlock }                 from '@landing/skills-fragment'
import { Background }                  from '@ui/background'

const HeroOpeningTheRhythmBlock = () => (
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
      <BannerOpeningTheRhythmBlock />
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
      <BannerOpeningTheRhythmBlock />
      <AfterTheCourseBlock />
      <SkillsBlock />
    </Background>
  </>
)

export { HeroOpeningTheRhythmBlock }
