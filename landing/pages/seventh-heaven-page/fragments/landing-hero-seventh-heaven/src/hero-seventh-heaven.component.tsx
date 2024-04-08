import React                                from 'react'
import { FC }                               from 'react'

import { BannerSeventhHeavenBlock }         from '@landing/banner-seventh-heaven-fragment'
import { ProgramSeventhHeavenBlock }        from '@landing/program-seventh-heaven-fragment'
import { TargetAudienceSeventhHeavenBlock } from '@landing/target-audience-seventh-heaven-fragment'
import { Box }                              from '@ui/layout'

import { HeroSeventhHeavenProps }           from './hero-seventh-heaven.interfaces'

const HeroSeventhHeavenBlock: FC<HeroSeventhHeavenProps> = ({ background, seventhHeavenData }) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize={[0, '100% 42%', '100% 32%', '100% 26%']}
      backgroundRepeat='no-repeat'
      backgroundPosition='0px -280px'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
      <BannerSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <TargetAudienceSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <ProgramSeventhHeavenBlock
        background={background}
        seventhHeavenData={seventhHeavenData}
        scrollId='desktop-scroll'
      />
    </Box>
    </Box>
    <Box
      display={['flex', 'none', 'none']}
      flexDirection='column'
      width='100%'
      backgroundImage={`url(${background?.mobile?.hero?.node.sourceUrl})`}
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <BannerSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <TargetAudienceSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
      <ProgramSeventhHeavenBlock
        background={background}
        seventhHeavenData={seventhHeavenData}
        scrollId='mobile-scroll'
      />
    </Box>
  </>
)

export { HeroSeventhHeavenBlock }
