import React                             from 'react'
import { FC }                            from 'react'

import { BannerPolyrhythmicKeysBlock }   from '@landing/banner-polyrhythmic-keys-fragment'
import { ProgramPolyrhythmicKeyslBlock } from '@landing/program-polyrhythmic-keys-fragment'
import { Box }                           from '@ui/layout'

import { HeroPolyrhythmicKeysProps }     from './hero-polyrhythmic-keys.interfaces'

const HeroPolyrhythmicKeysBlock: FC<HeroPolyrhythmicKeysProps> = ({
  background,
  polyrhythmicKeysData,
}) => (
  <>
    <Box
      display={['none', 'flex', 'flex']}
      width='100%'
      backgroundImage={`url(${background?.desktop?.hero?.node.sourceUrl})`}
      backgroundSize={[0, '100% 40%', '100% 12%', '100% 12%']}
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerPolyrhythmicKeysBlock polyrhythmicKeysData={polyrhythmicKeysData} />
        <ProgramPolyrhythmicKeyslBlock
          background={background}
          polyrhythmicKeysData={polyrhythmicKeysData}
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
      backgroundPosition='center -60%'
    >
      <Box
        flexDirection='column'
        width='100%'
        backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
        backgroundSize='contain'
      >
        <BannerPolyrhythmicKeysBlock polyrhythmicKeysData={polyrhythmicKeysData} />
        <ProgramPolyrhythmicKeyslBlock
          background={background}
          polyrhythmicKeysData={polyrhythmicKeysData}
          scrollId='mobile-scroll'
        />
      </Box>
    </Box>
  </>
)

export { HeroPolyrhythmicKeysBlock }
