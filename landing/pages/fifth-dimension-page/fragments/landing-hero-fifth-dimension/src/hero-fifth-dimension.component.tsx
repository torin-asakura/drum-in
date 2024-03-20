import React                                 from 'react'

import { BannerFifthDimensionBlock }         from '@landing/banner-fifth-dimension-fragment'
import { ProgramFifthDimensionBlock }        from '@landing/program-fifth-dimension-fragment'
import { TargetAudienceFifthDimensionBlock } from '@landing/target-audience-fifth-dimension-fragment'
import { Box }                               from '@ui/layout'

const HeroFifthDimensionBlock = ({ background, fifthDimensionData }) => (
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
      <BannerFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
      <TargetAudienceFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
      <ProgramFifthDimensionBlock
        fifthDimensionData={fifthDimensionData}
        scrollId='desktop-scroll'
      />
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
      <BannerFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
      <TargetAudienceFifthDimensionBlock fifthDimensionData={fifthDimensionData} />
      <ProgramFifthDimensionBlock
        fifthDimensionData={fifthDimensionData}
        scrollId='mobile-scroll'
      />
    </Box>
  </>
)

export { HeroFifthDimensionBlock }
