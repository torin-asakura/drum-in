import React                                 from 'react'

import { BannerFifthDimensionBlock }         from '@landing/banner-fifth-dimension-fragment'
import { ProgramFifthDimensionBlock }        from '@landing/program-fifth-dimension-fragment'
import { TargetAudienceFifthDimensionBlock } from '@landing/target-audience-fifth-dimension-fragment'
import { Background }                        from '@ui/background'

const HeroFifthDimensionBlock = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='transparentGreenBlueImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerFifthDimensionBlock />
      <TargetAudienceFifthDimensionBlock />
      <ProgramFifthDimensionBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='greenBlueSmallImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerFifthDimensionBlock />
      <TargetAudienceFifthDimensionBlock />
      <ProgramFifthDimensionBlock />
    </Background>
  </>
)

export { HeroFifthDimensionBlock }
