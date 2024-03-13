import React                    from 'react'

import { CourseID }             from '@globals/data'
import { AdvantagesBlock }      from '@landing/advantages-fragment'
import { BannerConnacolBlock }  from '@landing/banner-connacol-fragment'
import { ProgramConnacolBlock } from '@landing/program-connacol-fragment'
import { Box }                  from '@ui/layout'
import { useIndividualCourse }  from '@globals/data'

const HeroConnacolBlock = () => {
  const { background } = useIndividualCourse(CourseID.CONNACOL)

  return (
    <>
      <Box
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.desktop?.node.sourceUrl})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerConnacolBlock />
        <AdvantagesBlock />
        <ProgramConnacolBlock scrollId='desktop-scroll' />
      </Box>
      <Box
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.mobile?.node.sourceUrl})`}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center top'
      >
        <BannerConnacolBlock />
        <AdvantagesBlock />
        <ProgramConnacolBlock scrollId='mobile-scroll' />
      </Box>
    </>
  )
}

export { HeroConnacolBlock }
