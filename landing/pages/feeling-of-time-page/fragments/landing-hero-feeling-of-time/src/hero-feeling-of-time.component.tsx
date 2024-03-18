import React                                from 'react'

import { BannerFeelingOfTimeBlock }         from '@landing/banner-feeling-of-time-fragment'
import { ProgramFeelingOfTimeBlock }        from '@landing/program-feeling-of-time-fragment'
import { TargetAudienceFeelingOfTimeBlock } from '@landing/target-audience-feeling-of-time-fragment'
import { Box }                              from '@ui/layout'

const HeroFeelingOfTimeBlock = ({ background, feelingOfTimeData }) => (
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
      <BannerFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
      <TargetAudienceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
      <ProgramFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} scrollId='desktop-scroll' />
    </Box>
    <Box
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      backgroundImage={`url(${background.mobile.hero.node.sourceUrl})`}
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
      <TargetAudienceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
      <ProgramFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} scrollId='mobile-scroll' />
    </Box>
  </>
)

export { HeroFeelingOfTimeBlock }
