import React                    from 'react'

import { BannerPolyrhythmicKeysBlock }  from '@landing/banner-polyrhythmic-keys-fragment'
import { ProgramPolyrhythmicKeyslBlock } from '@landing/program-polyrhythmic-keys-fragment'
import { Background }           from '@ui/background'

const HeroPolyrhythmicKeysBlock = () => (
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
      <BannerPolyrhythmicKeysBlock />
      <ProgramPolyrhythmicKeyslBlock />
    </Background>
    <Background
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueSmallImageGradient'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center -60%'
    >
      <BannerPolyrhythmicKeysBlock />
      <ProgramPolyrhythmicKeyslBlock />
    </Background>
  </>
)

export { HeroPolyrhythmicKeysBlock }
