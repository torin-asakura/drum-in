import styled             from '@emotion/styled'
import { keyframes }      from '@emotion/react'

import React              from 'react'
import { FC }             from 'react'
import { memo }           from 'react'
import { useMemo }        from 'react'

import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Repeater }       from '@ui/utils'

import { TapeList }       from './list'
import { TapeBlockProps } from './tape.interfaces'

const TapeBlock: FC<TapeBlockProps> = memo(({ runningLineData }) => {
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
          <Repeater quantity={50}>{() => <TapeList runningLineData={runningLineData} />}</Repeater>
        </AnimationBox>
      </Box>
      <Layout flexBasis={80} />
    </Box>
  )
})

export { TapeBlock }
