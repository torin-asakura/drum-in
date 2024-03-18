import React                             from 'react'

import { BannerPolyrhythmicKeysBlock }   from '@landing/banner-polyrhythmic-keys-fragment'
import { ProgramPolyrhythmicKeyslBlock } from '@landing/program-polyrhythmic-keys-fragment'
import { Box }                           from '@ui/layout'

const HeroPolyrhythmicKeysBlock = ({ background, polyrhythmicKeysData }) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      flexDirection='column'
      width='100%'
      backgroundImage={`url(${background.desktop.hero.node.sourceUrl})`}
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerPolyrhythmicKeysBlock polyrhythmicKeysData={polyrhythmicKeysData} />
      <ProgramPolyrhythmicKeyslBlock scrollId='desktop-scroll' />
    </Box>
    <Box
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      backgroundImage={`url(${background.mobile.hero.node.sourceUrl})`}
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center -60%'
    >
      <BannerPolyrhythmicKeysBlock polyrhythmicKeysData={polyrhythmicKeysData} />
      <ProgramPolyrhythmicKeyslBlock scrollId='mobile-scroll' />
    </Box>
  </>
)

export { HeroPolyrhythmicKeysBlock }
