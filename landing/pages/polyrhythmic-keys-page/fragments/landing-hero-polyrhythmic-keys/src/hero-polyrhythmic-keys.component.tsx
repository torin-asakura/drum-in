import React                             from 'react'

import { BannerPolyrhythmicKeysBlock }   from '@landing/banner-polyrhythmic-keys-fragment'
import { ProgramPolyrhythmicKeyslBlock } from '@landing/program-polyrhythmic-keys-fragment'
import { Box }                           from '@ui/layout'

import { useHero }                       from './data'

const HeroPolyrhythmicKeysBlock = () => {
  const hero = useHero()

  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${hero?.backgroundForHero?.sourceUrl})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerPolyrhythmicKeysBlock />
        <ProgramPolyrhythmicKeyslBlock scrollId={'desktop-scroll'}/>
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${hero?.backgroundMobileForHero?.sourceUrl})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center -60%'
      >
        <BannerPolyrhythmicKeysBlock />
        <ProgramPolyrhythmicKeyslBlock scrollId={'mobile-scroll'}/>
      </Box>
    </>
  )
}

export { HeroPolyrhythmicKeysBlock }
