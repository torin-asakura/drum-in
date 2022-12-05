import styled            from '@emotion/styled'
import { keyframes }     from '@emotion/react'

import React             from 'react'
import { useMemo }       from 'react'

import { ComposerIcon }  from '@ui/icons'
import { DjsIcon }       from '@ui/icons'
import { MusiciansIcon } from '@ui/icons'
import { TeachersIcon }  from '@ui/icons'
import { VocalistsIcon } from '@ui/icons'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Repeater }      from '@ui/utils'

import { Indent }        from './indent'

const TapeBlock = () => {
  const infinityLine = useMemo(
    () => keyframes`0% { transform: translateX(0) } 100% { transform: translate(-50%) }`,
    []
  )
  const AnimationBox = useMemo(
    () => styled(Box)({ animation: `${infinityLine} 400s linear infinite` }),
    // eslint-disable-next-line
    []
  )

  return (
    <Box flexDirection='column'>
      <Layout flexBasis={70} />
      <Box
        height={[38, 65, 92]}
        alignItems='center'
        backgroundColor='background.smokyWhite'
        style={{ transform: 'rotate(-3deg)' }}
      >
        <AnimationBox alignItems='center'>
          <Repeater quantity={50}>
            {() => (
              <>
                <Indent />
                <Box width={[171, 264, 358]}>
                  <MusiciansIcon width='100%' height='auto' />
                </Box>
                <Indent />
                <Box width={[165, 255, 346]}>
                  <VocalistsIcon width='100%' height='auto' />
                </Box>
                <Indent />
                <Box width={[201, 310, 419]}>
                  <ComposerIcon width='100%' height='auto' />
                </Box>
                <Indent />
                <Box width={[143, 218, 298]}>
                  <TeachersIcon width='100%' height='auto' />
                </Box>
                <Indent />
                <Box width={[133, 197, 273]}>
                  <DjsIcon width='100%' height='auto' />
                </Box>
              </>
            )}
          </Repeater>
        </AnimationBox>
      </Box>
      <Layout flexBasis={80} />
    </Box>
  )
}

export { TapeBlock }
