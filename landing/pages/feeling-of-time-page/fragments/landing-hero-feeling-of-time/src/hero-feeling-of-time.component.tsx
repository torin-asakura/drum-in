import React                                from 'react'

import { BannerFeelingOfTimeBlock }         from '@landing/banner-feeling-of-time-fragment'
import { ProgramFeelingOfTimeBlock }        from '@landing/program-feeling-of-time-fragment'
import { TargetAudienceFeelingOfTimeBlock } from '@landing/target-audience-feeling-of-time-fragment'
import { Background }                       from '@ui/background'

const HeroFeelingOfTimeBlock = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='transparentBlueTurquoiseImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerFeelingOfTimeBlock />
      <TargetAudienceFeelingOfTimeBlock />
      <ProgramFeelingOfTimeBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='blueTurquoiseSmallImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerFeelingOfTimeBlock />
      <TargetAudienceFeelingOfTimeBlock />
      <ProgramFeelingOfTimeBlock />
    </Background>
  </>
)

export { HeroFeelingOfTimeBlock }
