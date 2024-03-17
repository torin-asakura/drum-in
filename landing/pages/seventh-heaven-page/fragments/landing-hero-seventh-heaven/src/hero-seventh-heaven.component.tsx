import React                                from 'react'

import { BannerSeventhHeavenBlock }         from '@landing/banner-seventh-heaven-fragment'
import { ProgramSeventhHeavenBlock }        from '@landing/program-seventh-heaven-fragment'
import { TargetAudienceSeventhHeavenBlock } from '@landing/target-audience-seventh-heaven-fragment'
import { Box }                              from '@ui/layout'

import { useHero }                          from './data'

const HeroSeventhHeavenBlock = ({ seventhHeavenData }) => {
  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-hero-seventh-heaven-page.png'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
        <TargetAudienceSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
        <ProgramSeventhHeavenBlock scrollId='desktop-scroll' />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/mobile-bg-hero-seventh-heaven-page.png'})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerSeventhHeavenBlock />
        <TargetAudienceSeventhHeavenBlock />
        <ProgramSeventhHeavenBlock scrollId='mobile-scroll' />
      </Box>
    </>
  )
}

export { HeroSeventhHeavenBlock }
