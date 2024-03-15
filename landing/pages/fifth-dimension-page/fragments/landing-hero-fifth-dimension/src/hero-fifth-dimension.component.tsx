import React                                 from 'react'

import { BannerFifthDimensionBlock }         from '@landing/banner-fifth-dimension-fragment'
import { ProgramFifthDimensionBlock }        from '@landing/program-fifth-dimension-fragment'
import { TargetAudienceFifthDimensionBlock } from '@landing/target-audience-fifth-dimension-fragment'
import { Box }                               from '@ui/layout'

import { useHero }                           from './data'

const HeroFifthDimensionBlock = ({fifthDimensionData}) => {

  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${''})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerFifthDimensionBlock fifthDimensionData={fifthDimensionData}/>
        <TargetAudienceFifthDimensionBlock />
        <ProgramFifthDimensionBlock scrollId='desktop-scroll' />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${''})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerFifthDimensionBlock />
        <TargetAudienceFifthDimensionBlock />
        <ProgramFifthDimensionBlock scrollId='mobile-scroll' />
      </Box>
    </>
  )
}

export { HeroFifthDimensionBlock }
