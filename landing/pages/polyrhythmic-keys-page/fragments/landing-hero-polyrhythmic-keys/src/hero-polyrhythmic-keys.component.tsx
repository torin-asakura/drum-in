import React                             from 'react'

import { BannerPolyrhythmicKeysBlock }   from '@landing/banner-polyrhythmic-keys-fragment'
import { ProgramPolyrhythmicKeyslBlock } from '@landing/program-polyrhythmic-keys-fragment'
import { Box }                           from '@ui/layout'

const HeroPolyrhythmicKeysBlock = ({polyrhythmicKeysData}) => {

  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2024/03/bg-opening-rhythm-desktop.webp'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerPolyrhythmicKeysBlock polyrhythmicKeysData={polyrhythmicKeysData}/>
        <ProgramPolyrhythmicKeyslBlock scrollId='desktop-scroll' />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${''})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center -60%'
      >
        <BannerPolyrhythmicKeysBlock />
        <ProgramPolyrhythmicKeyslBlock scrollId='mobile-scroll' />
      </Box>
    </>
  )
}

export { HeroPolyrhythmicKeysBlock }
