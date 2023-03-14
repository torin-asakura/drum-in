import React                    from 'react'

import { AdvantagesBlock }      from '@landing/advantages-fragment'
import { BannerСonnacolBlock }  from '@landing/banner-connacol-fragment'
import { ProgramConnacolBlock } from '@landing/program-connacol-fragment'
import { Background }           from '@ui/background'

const HeroConnacolBlock = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='transparentPurpleBlueImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerСonnacolBlock />
      <AdvantagesBlock />
      <ProgramConnacolBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueSmallImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerСonnacolBlock />
      <AdvantagesBlock />
      <ProgramConnacolBlock />
    </Background>
  </>
)

export { HeroConnacolBlock }
