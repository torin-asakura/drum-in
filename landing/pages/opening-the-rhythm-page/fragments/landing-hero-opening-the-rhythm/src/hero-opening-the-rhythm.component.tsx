import React                           from 'react'
import { FC }                          from 'react'

import { AfterTheCourseBlock }         from '@landing/after-the-course-fragment'
import { BannerOpeningTheRhythmBlock } from '@landing/banner-opening-the-rhythm-fragment'
import { SkillsBlock }                 from '@landing/skills-fragment'
import { Box }                         from '@ui/layout'

import { HeroOpeningTheRhythmProps }   from './hero-opening-the-rhythm.interfaces'

const HeroOpeningTheRhythmBlock: FC<HeroOpeningTheRhythmProps> = ({
  background,
  openingTheRhythm,
}) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center bottom'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
      <BannerOpeningTheRhythmBlock openingTheRhythm={openingTheRhythm} />
      <AfterTheCourseBlock openingTheRhythm={openingTheRhythm} />
      <SkillsBlock openingTheRhythm={openingTheRhythm} />
    </Box>
    </Box>
    <Box
      display={['flex', 'none', 'none']}
      width='100%'
      backgroundImage={`url(${background?.mobile?.hero?.node.sourceUrl})`}
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='right center'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
      <BannerOpeningTheRhythmBlock openingTheRhythm={openingTheRhythm} />
      <AfterTheCourseBlock openingTheRhythm={openingTheRhythm} />
      <SkillsBlock openingTheRhythm={openingTheRhythm} />
    </Box>
    </Box>
  </>
)

export { HeroOpeningTheRhythmBlock }
