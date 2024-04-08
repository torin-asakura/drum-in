import React                                 from 'react'
import { FC }                                from 'react'

import { Box }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Layout }                            from '@ui/layout'
import { Row }                               from '@ui/layout'
import { Text }                              from '@ui/text'

import { ItemCard }                          from './item'
import { TargetAudienceFifthDimensionProps } from './target-audience-fifth-dimension.interfaces'

const TargetAudienceFifthDimensionBlock: FC<TargetAudienceFifthDimensionProps> = ({
  fifthDimensionData,
}) => {
  const getCourseCondition = (number) =>
    fifthDimensionData?.individualCourseData?.hero?.courseConditions?.find(
      (el) => el?.number === number
    )

  const firstCardData = {
    number: `0${getCourseCondition(1)?.number}`,
    description: getCourseCondition(1)?.description,
  }
  const secondCardData = {
    number: `0${getCourseCondition(2)?.number}`,
    description: getCourseCondition(2)?.description,
  }
  const thirdCardData = {
    number: `0${getCourseCondition(3)?.number}`,
    description: getCourseCondition(3)?.description,
  }

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[32, 46, 60]} />
          <Box width={['100%', 550, 750]}>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'moderate', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {fifthDimensionData?.individualCourseData?.hero?.cta}
            </Text>
          </Box>
          <Layout flexBasis={[24, 44, 64]} />
          <Box
            width='100%'
            position='relative'
            height={{ _: 310, tablet: 650, laptop: 960, wide: 694 }}
          >
            <Box fill zIndex={3} position='absolute'>
              <ItemCard number={firstCardData.number} text={firstCardData.description} />
            </Box>

            <Box fill zIndex={2}>
              <Layout flexBasis={[45, 0, 0, 360]} />
              <Column fill>
                <Layout flexBasis={[100, 220, 320, 200]} />
                <ItemCard number={secondCardData.number} text={secondCardData.description} />
              </Column>
            </Box>

            <Box fill zIndex={1} position='absolute'>
              <Layout flexBasis={[110, 0, 0, 900]} />
              <Column fill>
                <Layout flexBasis={[200, 440, 640, 400]} />
                <ItemCard number={thirdCardData.number} text={thirdCardData.description} />
              </Column>
            </Box>
          </Box>
          <Layout flexBasis={[32, 77, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { TargetAudienceFifthDimensionBlock }
