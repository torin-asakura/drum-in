import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Button }     from '@ui/button'
import { Circle }     from '@ui/figures'
import { Rectangle }  from '@ui/figures'
import { Square }     from '@ui/figures'
import { Row }        from '@ui/layout'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { useHover }   from '@ui/utils'

import { SlideLevel } from './slide-with-level'
import { SlideProps } from './slide.interfaces'

const Slide: FC<SlideProps> = ({
  title,
  level,
  desc,
  price,
  squareRotate,
  squarePositionX,
  squarePositionY,
  circleFirstLine,
  circleSecondLine,
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
  const [colorBorder, colorBorderProps] = useHover()

  if (level) {
    return (
      <SlideLevel
        title={title}
        level={level}
        desc={desc}
        price={price}
        squareRotate={squareRotate}
        squarePositionX={squarePositionX}
        squarePositionY={squarePositionY}
        quantityVideoLessons={quantityVideoLessons}
        rectangleRotate={rectangleRotate}
        rectanglePositionX={rectanglePositionX}
        rectanglePositionY={rectanglePositionY}
        quantityMonths={quantityMonths}
        textMonths={textMonths}
        rectangleColor={rectangleColor}
      />
    )
  }

  return (
    <Column>
      <Box
        width={[300, 520, 587]}
        overflow='hidden'
        borderRadius={['extra', 'semiHuge', 'huge']}
        border={['mediumBoldSmokyWhite', 'veryBoldSmokyWhite', 'veryBoldSmokyWhite']}
      >
        <Column>
          <Box width='100%' position='relative' overflow='hidden' height={[194, 300, 340]}>
            <Box position='absolute' left={squarePositionX} bottom={squarePositionY}>
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
              <Box position='absolute' left={circlePositionX} bottom={circlePositionY}>
                <Circle firstLine={circleFirstLine} secondLine={circleSecondLine} />
              </Box>
            ) : null}
            <Box position='absolute' left={rectanglePositionX} bottom={rectanglePositionY}>
              <Rectangle
                color={rectangleColor}
                firstLine={quantityMonths}
                secondLine={textMonths}
                rotate={rectangleRotate}
              />
            </Box>
          </Box>
          <Box
            backgroundColor='background.smokyWhite'
            borderTopLeftRadius={['zero', 'extra', 'bigger']}
            borderTopRightRadius={['zero', 'extra', 'bigger']}
          >
            <Layout flexBasis={[15, 26, 32]} flexShrink={0} />
            <Column alignItems='center'>
              <Layout flexBasis={[40, 46, 52]} />
              <Box>
                <Text
                  textAlign='center'
                  textTransform='uppercase'
                  fontFamily='DrukWideCy'
                  fontWeight='bold'
                  fontSize={['middling', 'large', 'small']}
                  lineHeight='default'
                  color='text.blackAmber'
                >
                  {title}
                </Text>
              </Box>
              <Layout flexBasis={[12, 22, 32]} />
              <Box>
                <Text
                  textAlign='center'
                  fontWeight='medium'
                  fontSize={['micro', 'semiRegular', 'large']}
                  lineHeight='primary'
                  color='text.gray'
                >
                  {desc}
                </Text>
              </Box>
              <Layout flexBasis={[38, 43, 48]} />
              <Box
                width='100%'
                display={['none', 'none', 'flex']}
                borderRadius='extra'
                border={colorBorder ? 'normalSmokyWhite' : 'normalBoldDark'}
                {...colorBorderProps}
              >
                <Button size='withoutPaddingBigHeight' variant='purpleBackground' fill>
                  <Text fontWeight='semiBold' fontSize={['micro', 'semiRegular', 'large']}>
                    {price}
                  </Text>
                </Button>
              </Box>
              <Row display={['flex', 'flex', 'none']}>
                <Button size='withoutPaddingMediumHeight' variant='purpleBackground' fill>
                  <Text fontWeight='semiBold' fontSize={['micro', 'semiRegular', 'large']}>
                    {price}
                  </Text>
                </Button>
              </Row>
              <Layout flexBasis={[20, 28, 36]} />
            </Column>
            <Layout flexBasis={[15, 26, 32]} flexShrink={0} />
          </Box>
        </Column>
      </Box>
      <Layout display={['flex', 'none', 'none']} flexBasis={24} flexShrink={0} />
    </Column>
  )
}

export { Slide }
