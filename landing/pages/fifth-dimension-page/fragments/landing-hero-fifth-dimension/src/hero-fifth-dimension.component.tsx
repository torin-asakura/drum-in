import React                                 from 'react'
import { FC }                                from 'react'

import { BannerFifthDimensionBlock }         from '@landing/banner-fifth-dimension-fragment'
import { ProgramFifthDimensionBlock }        from '@landing/program-fifth-dimension-fragment'
import { TargetAudienceFifthDimensionBlock } from '@landing/target-audience-fifth-dimension-fragment'
import { Box }                               from '@ui/layout'

import { HeroFifthDimensionProps }           from './hero-fifth-dimension.interfaces'

const HeroFifthDimensionBlock: FC<HeroFifthDimensionProps> = ({
  background,
  fifthDimensionData,
}) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize={[0, '100% 42%', '100% 32%', '100% 25%']}
      backgroundRepeat='no-repeat'
      backgroundPosition='0px -280px'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
        <TargetAudienceFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
        <ProgramFifthDimensionBlock
          background={background}
          fifthDimensionData={fifthDimensionData}
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
        <BannerFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
        <TargetAudienceFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
        <ProgramFifthDimensionBlock
          background={background}
          fifthDimensionData={fifthDimensionData}
          scrollId='mobile-scroll'
        />
      </Box>
    </Box>
  </>
)

export { HeroFifthDimensionBlock }
