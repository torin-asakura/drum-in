import React                           from 'react'

import { AfterTheCourseBlock }         from '@landing/after-the-course-fragment'
import { BannerOpeningTheRhythmBlock } from '@landing/banner-opening-the-rhythm-fragment'
import { SkillsBlock }                 from '@landing/skills-fragment'
import { Box }                         from '@ui/layout'

const HeroOpeningTheRhythmBlock = () => {
  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        // backgroundImage={`url(${hero[0]?.desktop?.node?.sourceUrl})`}
        backgroundSize='100% 100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center bottom'
      >
        <BannerOpeningTheRhythmBlock />
        <AfterTheCourseBlock />
        <SkillsBlock />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        // backgroundImage={`url(${hero[0]?.mobile?.node?.sourceUrl})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='right center'
      >
        <BannerOpeningTheRhythmBlock />
        <AfterTheCourseBlock />
        <SkillsBlock />
      </Box>
    </>
  )
}

export { HeroOpeningTheRhythmBlock }
