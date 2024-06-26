import React                                from 'react'
import { FC }                               from 'react'

import { BannerFeelingOfTimeBlock }         from '@landing/banner-feeling-of-time-fragment'
import { ProgramFeelingOfTimeBlock }        from '@landing/program-feeling-of-time-fragment'
import { TargetAudienceFeelingOfTimeBlock } from '@landing/target-audience-feeling-of-time-fragment'
import { Box }                              from '@ui/layout'

import { HeroFeelingOfTimeProps }           from './hero-feeling-of-time.interfaces'

const HeroFeelingOfTimeBlock: FC<HeroFeelingOfTimeProps> = ({ background, feelingOfTimeData }) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize={[0, '100% 42%', '100% 32%', '100% 26%']}
      backgroundRepeat='no-repeat'
      backgroundPosition='0px -300px'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
        <TargetAudienceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
        <ProgramFeelingOfTimeBlock
          background={background}
          feelingOfTimeData={feelingOfTimeData}
          scrollId='desktop-scroll'
        />
      </Box>
    </Box>
    <Box
      display={['flex', 'none', 'none']}
      width='100%'
      backgroundImage={`url(${background?.mobile?.hero?.node.sourceUrl})`}
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
        <TargetAudienceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
        <ProgramFeelingOfTimeBlock
          background={background}
          feelingOfTimeData={feelingOfTimeData}
          scrollId='mobile-scroll'
        />
      </Box>
    </Box>
  </>
)

export { HeroFeelingOfTimeBlock }
