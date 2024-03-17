import React                                from 'react'

import { BannerFeelingOfTimeBlock }         from '@landing/banner-feeling-of-time-fragment'
import { ProgramFeelingOfTimeBlock }        from '@landing/program-feeling-of-time-fragment'
import { TargetAudienceFeelingOfTimeBlock } from '@landing/target-audience-feeling-of-time-fragment'
import { Box }                              from '@ui/layout'

import { useHero }                          from './data'

const HeroFeelingOfTimeBlock = ({feelingOfTimeData}) => {

  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-hero-feeling-of-time-page.png'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData}/>
        <TargetAudienceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData}/>
        <ProgramFeelingOfTimeBlock scrollId='desktop-scroll' />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/mobile-bg-hero-feeling-of-time-page.png'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData}/>
        <TargetAudienceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData}/>
        <ProgramFeelingOfTimeBlock scrollId='mobile-scroll' />
      </Box>
    </>
  )
}

export { HeroFeelingOfTimeBlock }
