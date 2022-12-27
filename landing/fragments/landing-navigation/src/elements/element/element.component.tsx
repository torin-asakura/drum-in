import React            from 'react'
import { FC }           from 'react'
import { useIntl }      from 'react-intl'

import { Background }   from '@ui/background'
import { Condition }    from '@ui/condition'
import { Circle }       from '@ui/figures'
import { Rectangle }    from '@ui/figures'
import { Square }       from '@ui/figures'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { NextLink }     from '@ui/link'
import { Text }         from '@ui/text'
import { useHover }     from '@ui/utils'

import { ElementProps } from './element.interfaces'

const Element: FC<ElementProps> = ({
  stateHover,
  title,
  level,
  levelBackground,
  squareRotate,
  squarePositionX,
  squarePositionY,
  quantityVideoLessons,
  circlePositionX,
  circlePositionY,
  circleFirstLine,
  circleSecondLine,
  rectangleRotate,
  rectanglePositionX,
  rectanglePositionY,
  quantityMonths,
  textMonths,
  rectangleColor,
}) => {
  const [elemHover, elemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...(stateHover ? elemHoverProps : null)}>
      <Condition match={elemHover}>
        <Box
          display={['none', 'none', 'flex']}
          position='absolute'
          right={squarePositionX}
          bottom={squarePositionY}
        >
          <Square
            firstLine={quantityVideoLessons}
            secondLine={formatMessage({
              id: 'landing_choose_course.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={squareRotate}
          />
        </Box>
        {circleSecondLine ? (
          <Box
            display={['none', 'none', 'flex']}
            position='absolute'
            right={circlePositionX}
            bottom={circlePositionY}
          >
            <Circle firstLine={circleFirstLine} secondLine={circleSecondLine} />
          </Box>
        ) : null}
        <Box
          display={['none', 'none', 'flex']}
          position='absolute'
          right={rectanglePositionX}
          bottom={rectanglePositionY}
        >
          <Rectangle
            color={rectangleColor}
            firstLine={quantityMonths}
            secondLine={textMonths}
            rotate={rectangleRotate}
          />
        </Box>
      </Condition>
      <Box opacity={[1, 1, elemHover ? 1 : 0.3]}>
        {level ? (
          <>
            <Background
              display='flex'
              alignItems='center'
              justifyContent='center'
              textAlign='right'
              gradient={levelBackground}
              borderRadius='medium'
              width={64}
              height={24}
            >
              <Text
                textTransform='uppercase'
                fontFamily='DrukWideCy'
                fontWeight='bold'
                fontSize='micro'
                color='text.smokyWhite'
              >
                {' '}
                {level}{' '}
              </Text>
            </Background>
            <Layout flexBasis={[8, 10, 12]} />
            <Box>
              <NextLink path='/'>
                <Text
                  fontFamily='DrukWideCy'
                  fontWeight='bold'
                  fontSize={['medium', 'semiModerate', 'big']}
                >
                  {' '}
                  {title}{' '}
                </Text>
              </NextLink>
            </Box>
          </>
        ) : (
          <NextLink path='/'>
            <Text
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
            >
              {' '}
              {title}{' '}
            </Text>
          </NextLink>
        )}
      </Box>
    </Box>
  )
}

export { Element }
