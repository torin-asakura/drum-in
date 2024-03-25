import React                 from 'react'
import { forwardRef }        from 'react'

import { BannerBlock }       from '@landing/banner-fragment'
import { ChooseCourseBlock } from '@landing/choose-course-fragment'
import { TapeBlock }         from '@landing/tape-fragment'
import { Box }               from '@ui/layout'

import { useHero }           from './data'

const Hero = forwardRef(({background, data }: any, ref: any) => {
  const hero = useHero()

  return (
    <Box ref={ref}>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.desktop.hero.node.sourceUrl})`}
        backgroundSize='100% 100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerBlock />
        <TapeBlock />
        <ChooseCourseBlock />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.mobile.hero.node.sourceUrl})`}
        backgroundSize='contain'
        backgroundRepeat='no-repeat'
        backgroundPosition='right center'
      >
        <BannerBlock />
        <TapeBlock />
        <ChooseCourseBlock />
      </Box>
    </Box>
  )
})

export { Hero }
