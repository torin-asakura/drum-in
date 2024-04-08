import React                    from 'react'
import { FC }                   from 'react'

import { AdvantagesBlock }      from '@landing/advantages-fragment'
import { BannerConnacolBlock }  from '@landing/banner-connacol-fragment'
import { ProgramConnacolBlock } from '@landing/program-connacol-fragment'
import { Box }                  from '@ui/layout'

import { HeroConnacolProps }    from './hero-connacol.interfaces'

const HeroConnacolBlock: FC<HeroConnacolProps> = ({ background, connacolData }) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize={[0, '100% 42%', '100% 24%', '100% 24%']}
      backgroundRepeat='no-repeat'
      backgroundPosition='0px -100px'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
      <BannerConnacolBlock connacolData={connacolData} />
      <AdvantagesBlock connacolData={connacolData} />
      <ProgramConnacolBlock
        background={background}
        connacolData={connacolData}
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
      <BannerConnacolBlock connacolData={connacolData} />
      <AdvantagesBlock connacolData={connacolData} />
      <ProgramConnacolBlock
        background={background}
        connacolData={connacolData}
        scrollId='mobile-scroll'
      />
    </Box>
  </>
)

export { HeroConnacolBlock }
