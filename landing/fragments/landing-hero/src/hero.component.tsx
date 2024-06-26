import React                 from 'react'
import { FC }                from 'react'
import { forwardRef }        from 'react'

import { BannerBlock }       from '@landing/banner-fragment'
import { ChooseCourseBlock } from '@landing/choose-course-fragment'
import { TapeBlock }         from '@landing/tape-fragment'
import { Box }               from '@ui/layout'

import { HeroProps }         from './hero.interfaces'

const Hero: FC<HeroProps> = forwardRef(({ mainPageData, background }, ref: any) => (
  <Box ref={ref}>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <Box
        width='100%'
        flexDirection='column'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerBlock heroData={mainPageData.hero} />
        <TapeBlock runningLineData={mainPageData?.runningLine} />
        <ChooseCourseBlock mainPageData={mainPageData} />
      </Box>
    </Box>
    <Box
      display={['flex', 'none', 'none']}
      width='100%'
      backgroundImage={`url(${background?.mobile?.hero?.node.sourceUrl})`}
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='right center'
    >
      <Box
        width='100%'
        flexDirection='column'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerBlock heroData={mainPageData.hero} />
        <TapeBlock runningLineData={mainPageData?.runningLine} />
        <ChooseCourseBlock mainPageData={mainPageData} />
      </Box>
    </Box>
  </Box>
))

export { Hero }
