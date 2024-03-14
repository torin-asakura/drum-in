import React                    from 'react'

import { AdvantagesBlock }      from '@landing/advantages-fragment'
import { BannerConnacolBlock }  from '@landing/banner-connacol-fragment'
import { ProgramConnacolBlock } from '@landing/program-connacol-fragment'
import { Box }                  from '@ui/layout'



const HeroConnacolBlock = ({connacolData}) => {


  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'url'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerConnacolBlock connacolData={connacolData}/>
        <AdvantagesBlock connacolData={connacolData}/>
        <ProgramConnacolBlock scrollId='desktop-scroll' />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'url'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerConnacolBlock connacolData={connacolData}/>
        <AdvantagesBlock connacolData={connacolData}/>
        <ProgramConnacolBlock scrollId='mobile-scroll' />
      </Box>
    </>
  )
}

export { HeroConnacolBlock }
