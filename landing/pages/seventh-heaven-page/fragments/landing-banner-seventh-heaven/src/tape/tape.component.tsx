import styled        from '@emotion/styled'
import { keyframes } from '@emotion/react'

import React         from 'react'
import uniqid        from 'uniqid'
import { FC }        from 'react'
import { useMemo }   from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'
import { Repeater }  from '@ui/utils'

import { TapeProps } from './tape.interfaces'

const Tape: FC<TapeProps> = ({ level }) => {
  const infinityLine = useMemo(
    () => keyframes`0% { transform: translateX(0) } 100% { transform: translate(-50%) }`,
    []
  )
  const AnimationBox = useMemo(
    () => styled(Box)({ animation: `${infinityLine} 400s linear infinite` }),
    // eslint-disable-next-line
    []
  )
  const levelArray = Array(8).fill(level)

  return (
    <Column>
      <Box height={[41, 60, 79]} alignItems='center'>
        <AnimationBox alignItems='center'>
          <Repeater quantity={50}>
            {() =>
              levelArray.map((currentValue) => (
                <React.Fragment key={uniqid()}>
                  <Text
                    textTransform='uppercase'
                    whiteSpace='nowrap'
                    fontWeight='medium'
                    fontSize={['micro', 'large', 'mild']}
                    lineHeight={['primary', 'primary', 'medium']}
                    color='text.smokyWhite'
                  >
                    {currentValue}
                  </Text>
                  <Box flexShrink={0} width={[24, 78, 140]} />
                </React.Fragment>
              ))
            }
          </Repeater>
        </AnimationBox>
      </Box>
      <Layout flexBasis={[7, 30, 220]} />
    </Column>
  )
}
export { Tape }
