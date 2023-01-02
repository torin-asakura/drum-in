import React                  from 'react'

import { ChillIcon }           from '@ui/icons'
import { FunkIcon } from '@ui/icons'
import { FlagCubaIcon }       from '@ui/icons'
import { FlagIndiaIcon }      from '@ui/icons'
import { FlagSpainIcon }      from '@ui/icons'
import { JazzIcon }           from '@ui/icons'
import { PopIcon }            from '@ui/icons'
import { ReggaeIcon }         from '@ui/icons'
import { RnBIcon }            from '@ui/icons'
import { RockIcon }           from '@ui/icons'
import { TranceIcon }         from '@ui/icons'
import { Box }                from '@ui/layout'

const SkillsList = () => (
  <>
    <Box display={['none', 'none', 'flex']} position='relative' height='100%' width='100%'>
      <Box position='absolute' bottom={135} left={28}>
        <FlagSpainIcon width={116} height={116} />
      </Box>
      <Box position='absolute' bottom={22} left={3} style={{ transform: 'rotate(15deg)' }}>
        <PopIcon width={310} height={85} />
      </Box>
      <Box position='absolute' bottom={182} left={142} style={{ transform: 'rotate(-15deg)' }}>
        <ReggaeIcon width={610} height={85} />
      </Box>
      <Box position='absolute' bottom={30} left={300} style={{ transform: 'rotate(9deg)' }}>
        <RockIcon width={425} height={85} />
      </Box>
      <Box position='absolute' bottom={118} left={487}>
        <RnBIcon width={409} height={80} />
      </Box>
      <Box position='absolute' bottom={202} left={765}>
        <FlagCubaIcon width={116} height={116} />
      </Box>
      <Box position='absolute' bottom={9} right={462}>
        <TranceIcon width={607} height={82} />
      </Box>
      <Box position='absolute' bottom={136} right={539} style={{ transform: 'rotate(15deg)' }}>
        <FunkIcon width={405} height={85} />
      </Box>
      <Box position='absolute' bottom={147} right={133}>
        <ChillIcon width={420} height={82} />
      </Box>
      <Box position='absolute' bottom={41} right={0.5} style={{ transform: 'rotate(-15deg)' }}>
        <JazzIcon width={400} height={85} />
      </Box>
      <Box position='absolute' bottom={158} right={43}>
        <FlagIndiaIcon width={116} height={116} />
      </Box>
    </Box>
    <Box display={['flex', 'flex', 'none']} position='relative' height='100%' width='100%'>
      <Box position='absolute' bottom={51} left={39}>
        <FlagSpainIcon width={28} height={28} />
      </Box>
      <Box position='absolute' bottom='8px' left={10} style={{ transform: 'rotate(15deg)' }}>
        <PopIcon width={77} height={21} />
      </Box>
      <Box position='absolute' bottom={45} left={45} style={{ transform: 'rotate(-15deg)' }}>
        <ReggaeIcon width={152} height={21} />
      </Box>
      <Box position='absolute' bottom='8px' left={85} style={{ transform: 'rotate(9deg)' }}>
        <RockIcon width={106} height={21} />
      </Box>
      <Box position='absolute' bottom={28} left={132}>
        <RnBIcon width={103} height={20} />
      </Box>
      <Box position='absolute' bottom={0} right={28}>
        <FlagCubaIcon width={28} height={28} />
      </Box>
      <Box position='absolute' bottom={81} left={-1}>
        <TranceIcon width={152} height={20} />
      </Box>
      <Box position='absolute' bottom={31} right={-2} style={{ transform: 'rotate(15deg)' }}>
        <FunkIcon width={102} height={21} />
      </Box>
      <Box position='absolute' bottom={80} right={0} style={{ transform: 'rotate(-15deg)' }}>
        <ChillIcon width={105} height={21} />
      </Box>
      <Box position='absolute' bottom={93} right={90} style={{ transform: 'rotate(3deg)' }}>
        <JazzIcon width={96} height={21} />
      </Box>
      <Box position='absolute' bottom={51} right={98}>
        <FlagIndiaIcon width={28} height={28} />
      </Box>
    </Box>
  </>
)

export { SkillsList }
