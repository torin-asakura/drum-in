import React                 from 'react'

import { BannerBlock }       from '@landing/banner-fragment'
import { ChooseCourseBlock } from '@landing/choose-course-fragment'
import { HeaderBlock }       from '@landing/header-fragment'
import { TapeBlock }         from '@landing/tape-fragment'
import { Background }        from '@ui/background'

const Hero = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueImageGradient'
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <HeaderBlock />
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
      <HeaderBlock />
      <BannerBlock />
      <TapeBlock />
      <ChooseCourseBlock />
    </Background>
  </>
)

export { Hero }
