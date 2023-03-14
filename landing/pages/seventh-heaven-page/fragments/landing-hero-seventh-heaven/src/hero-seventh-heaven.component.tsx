import React                                from 'react'

import { BannerSeventhHeavenBlock }         from '@landing/banner-seventh-heaven-fragment'
import { ProgramSeventhHeavenBlock }        from '@landing/program-seventh-heaven-fragment'
import { TargetAudienceSeventhHeavenBlock } from '@landing/target-audience-seventh-heaven-fragment'
import { Background }                       from '@ui/background'

const HeroSeventhHeavenBlock = () => (
  <>
    <Background
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='transparentPinkBlueImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerSeventhHeavenBlock />
      <TargetAudienceSeventhHeavenBlock />
      <ProgramSeventhHeavenBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='pinkBlueSmallImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerSeventhHeavenBlock />
      <TargetAudienceSeventhHeavenBlock />
      <ProgramSeventhHeavenBlock />
    </Background>
  </>
)

export { HeroSeventhHeavenBlock }
