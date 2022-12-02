import React           from 'react'

import { BannerBlock } from '@landing/banner-fragment'
import { HeaderBlock } from '@landing/header-fragment'
import { Background }  from '@ui/background'

const Hero = () => (
  <Background
    width='100%'
    gradient='purpleBlueImageGradient'
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
    backgroundPosition='center top'
  >
    <HeaderBlock />
    <BannerBlock />
  </Background>
)

export { Hero }
