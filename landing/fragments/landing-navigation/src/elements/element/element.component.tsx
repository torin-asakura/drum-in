import React            from 'react'
import { FC }           from 'react'

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
  path,
  rectangleColor,
}) => {
  const [elemHover, elemHoverProps] = useHover()

  return (
    <Box width='max-content' {...(stateHover ? elemHoverProps : null)}>
      <Condition match={elemHover}>
        <Box
          display={['none', 'none', 'flex']}
          position='absolute'
          right={squarePositionX}
          bottom={squarePositionY}
        >
          <Square firstLine={quantityVideoLessons} rotate={squareRotate} />
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
          <Rectangle color={rectangleColor} firstLine={quantityMonths} rotate={rectangleRotate} />
        </Box>
      </Condition>
      <Box opacity={[1, 1, elemHover || window.location.pathname === path ? 1 : 0.3]}>
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
                fontFamily='secondary'
                fontWeight='bold'
                fontSize='micro'
                color='text.smokyWhite'
              >
                {level}
              </Text>
            </Background>
            <Layout flexBasis={[8, 10, 12]} />
            <Box>
              <NextLink path={path}>
                <Text
                  fontFamily='secondary'
                  fontWeight='bold'
                  g
                  fontSize={['medium', 'semiModerate', 'moderate', 'big']}
                >
                  {title}
                </Text>
              </NextLink>
            </Box>
          </>
        ) : (
          <NextLink path={path}>
            <Text
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'moderate', 'big']}
            >
              {title}
            </Text>
          </NextLink>
        )}
      </Box>
    </Box>
  )
}

export { Element }
