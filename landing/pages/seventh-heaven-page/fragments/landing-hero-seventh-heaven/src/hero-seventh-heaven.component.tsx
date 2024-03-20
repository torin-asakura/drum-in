import React                                from 'react'

import { BannerSeventhHeavenBlock }         from '@landing/banner-seventh-heaven-fragment'
import { ProgramSeventhHeavenBlock }        from '@landing/program-seventh-heaven-fragment'
import { TargetAudienceSeventhHeavenBlock } from '@landing/target-audience-seventh-heaven-fragment'
import { Box }                              from '@ui/layout'

const HeroSeventhHeavenBlock = ({ background, seventhHeavenData }) => (
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
      <BannerSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <TargetAudienceSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <ProgramSeventhHeavenBlock seventhHeavenData={seventhHeavenData} scrollId='desktop-scroll' />
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
      <BannerSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <TargetAudienceSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <ProgramSeventhHeavenBlock seventhHeavenData={seventhHeavenData} scrollId='mobile-scroll' />
    </Box>
  </>
)

export { HeroSeventhHeavenBlock }
