import React                 from 'react'

import { BannerBlock }       from '@landing/banner-fragment'
import { ChooseCourseBlock } from '@landing/choose-course-fragment'
import { TapeBlock }         from '@landing/tape-fragment'
import { Background }        from '@ui/background'

const Hero = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueImageGradient'
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerBlock />
      <TapeBlock />
      <ChooseCourseBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueSmallImageGradient'
      backgroundSize='contain'
      backgroundRepeat='no-repeat'
      backgroundPosition='right center'
    >
      <BannerBlock />
      <TapeBlock />
      <ChooseCourseBlock />
    </Background>
  </>
)

export { Hero }
