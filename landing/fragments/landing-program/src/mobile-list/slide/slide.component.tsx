import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Circle }     from '@ui/figures'
import { Rectangle }  from '@ui/figures'
import { Square }     from '@ui/figures'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'

import { SlideProps } from './slide.interfaces'

const Slide: FC<SlideProps> = ({
  forWhom,
  level,
  desc,
  squareRotate,
  squarePositionX,
  squarePositionY,
  quantityLiveBroadcast,
  circlePositionY,
  circlePositionX,
  rectangleRotate,
  rectanglePositionY,
  rectanglePositionX,
  rectangleColor,
  quantityVideoLessons,
  quantityMonths,
  textMonths,
}) => {
  const { formatMessage } = useIntl()

  return (
    <Column>
      <Box
        width={[300, 520, 0]}
        justifyContent='center'
        borderRadius={['extra', 'bigger', 'bigger']}
        border='mediumBoldSmokyWhite'
      >
        <Column>
          <Box
            width={['100%', 400, 0]}
            alignSelf='center'
            position='relative'
            overflow='hidden'
            height={[194, 300, 0]}
          >
            <Box position='absolute' right={squarePositionX} bottom={squarePositionY}>
              <Square
                firstLine={quantityVideoLessons}
                secondLine={formatMessage({
                  id: 'landing_program.video_lessons',
                })}
                rotate={squareRotate}
              />
            </Box>
            <Box position='absolute' right={circlePositionX} bottom={circlePositionY}>
              <Circle
                firstLine={quantityLiveBroadcast}
                secondLine={formatMessage({
                  id: 'landing_program.live-broadcast',
                })}
              />
            </Box>
            <Box position='absolute' right={rectanglePositionX} bottom={rectanglePositionY}>
              <Rectangle
                color={rectangleColor}
                firstLine={quantityMonths}
                secondLine={textMonths}
                rotate={rectangleRotate}
              />
            </Box>
          </Box>
          <Box
            width={[300, 520, 0]}
            borderRadius={['extra', 'bigger', 'bigger']}
            border='mediumBoldSmokyWhite'
            borderBottom='none'
          >
            <Layout flexBasis={[20, 28, 0]} flexShrink={0} />
            <Column>
              <Layout flexBasis={[40, 46, 0]} />
              <Box>
                <Text
                  textTransform='uppercase'
                  fontWeight='semiBold'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='default'
                  color='text.gray'
                >
                  {forWhom}
                </Text>
              </Box>
              <Layout flexBasis={[24, 30, 0]} />
              <Box>
                <Text
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize={['medium', 'regular', 'regular']}
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  {level}
                </Text>
              </Box>
              <Layout flexBasis={[18, 26, 48]} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.gray'
                >
                  {desc}
                </Text>
              </Box>
              <Layout flexBasis={[22, 30, 0]} />
            </Column>
            <Layout flexBasis={[12, 20, 0]} flexShrink={0} />
          </Box>
        </Column>
      </Box>
      <Layout flexBasis={[36, 42, 0]} flexShrink={0} />
    </Column>
  )
}

export { Slide }
