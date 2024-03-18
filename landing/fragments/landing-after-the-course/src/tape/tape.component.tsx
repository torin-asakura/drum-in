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

const Tape: FC<TapeProps> = ({ firstLine, secondLine, thirdLine }) => {
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
    <Box
      position='absolute'
      right={{ _: 0, tablet: 0, laptop: -150, wide: 0 }}
      top={[104, 155, 85]}
      width={[266, 570, 940]}
      backgroundColor='background.blackAmber'
      borderTopLeftRadius={['giant', 'gigantic', 'biggest']}
      borderBottomLeftRadius={['giant', 'gigantic', 'biggest']}
      overflow='hidden'
    >
      <Layout flexBasis={[15, 27, 38]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[9, 22, 36]} />
        <Box>
          <AnimationBox alignItems='center'>
            <Repeater quantity={50}>
              {() =>
                firstLine?.split(';').map((currentValue) => (
                  <React.Fragment key={uniqid()}>
                    <Box>
                      <Text
                        whiteSpace='nowrap'
                        fontWeight='medium'
                        fontSize={['large', 'semiExtra', 'huge']}
                        lineHeight={['small', 'small', 'medium']}
                        color='text.smokyWhite'
                      >
                        {currentValue}
                      </Text>
                    </Box>
                    <Box flexShrink={0} width={[12, 26, 40]} />
                  </React.Fragment>
                ))
              }
            </Repeater>
          </AnimationBox>
        </Box>
        <Layout flexBasis={[9, 9, 8]} />
        <Box>
          <AnimationBox alignItems='center'>
            <Repeater quantity={50}>
              {() =>
                secondLine?.split(';').map((currentValue) => (
                  <React.Fragment key={uniqid()}>
                    <Box>
                      <Text
                        whiteSpace='nowrap'
                        fontWeight='medium'
                        fontSize={['large', 'semiExtra', 'huge']}
                        lineHeight={['small', 'small', 'medium']}
                        color='text.smokyWhite'
                      >
                        {secondLine}
                      </Text>
                    </Box>
                    <Box flexShrink={0} width={[12, 26, 40]} />
                  </React.Fragment>
                ))
              }
            </Repeater>
          </AnimationBox>
        </Box>
        <Layout flexBasis={[9, 9, 8]} />
        <Box>
          <AnimationBox alignItems='center'>
            <Repeater quantity={50}>
              {() =>
                thirdLine?.split(';').map((currentValue) => (
                  <React.Fragment key={uniqid()}>
                    <Box>
                      <Text
                        whiteSpace='nowrap'
                        fontWeight='medium'
                        fontSize={['large', 'semiExtra', 'huge']}
                        lineHeight={['small', 'small', 'medium']}
                        color='text.smokyWhite'
                      >
                        {currentValue}
                      </Text>
                    </Box>
                    <Box flexShrink={0} width={[12, 26, 40]} />
                  </React.Fragment>
                ))
              }
            </Repeater>
          </AnimationBox>
        </Box>
        <Layout flexBasis={[9, 22, 36]} />
      </Column>
    </Box>
  )
}
export { Tape }
