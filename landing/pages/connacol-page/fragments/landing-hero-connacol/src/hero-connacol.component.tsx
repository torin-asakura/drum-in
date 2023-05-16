import React                    from 'react'

import { AdvantagesBlock }      from '@landing/advantages-fragment'
import { BannerConnacolBlock }   from '@landing/banner-connacol-fragment'
import { ProgramConnacolBlock } from '@landing/program-connacol-fragment'
import { Box }                  from '@ui/layout'

import { useHero }              from './data'

const HeroConnacolBlock = () => {
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
        <BannerConnacolBlock />
        <AdvantagesBlock />
        <ProgramConnacolBlock />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${hero?.backgroundMobileForHero?.sourceUrl})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerConnacolBlock />
        <AdvantagesBlock />
        <ProgramConnacolBlock />
      </Box>
    </>
  )
}

export { HeroConnacolBlock }
