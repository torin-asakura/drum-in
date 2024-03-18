import React        from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { Text }     from '@ui/text'

import { ItemCard } from './item'

const TargetAudienceFifthDimensionBlock = ({ fifthDimensionData }) => {
  const getCourseCondition = (number) =>
    fifthDimensionData?.individualCourseData.hero.courseConditions?.find(
      (el) => el.number === number
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
      <Box width={['100%', '100%', 1920]}>
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
              {fifthDimensionData?.individualCourseData.hero.cta}
            </Text>
          </Box>
          <Layout flexBasis={[24, 44, 64]} />
          <Box
            width='100%'
            position='relative'
            height={{ _: 309, tablet: 550, laptop: 912, wide: 694 }}
          >
            <ItemCard
              number={firstCardData?.number}
              text={firstCardData?.description}
              positionHorizontal={{ _: 0, tablet: 0, laptop: 0, wide: 0 }}
              positionVertical={{ _: 0, tablet: 0, laptop: 0, wide: 0 }}
              zIndex={3}
            />
            <ItemCard
              number={secondCardData?.number}
              text={secondCardData?.description}
              positionHorizontal={{ _: 45, tablet: 100, laptop: 0, wide: 313 }}
              positionVertical={{ _: 100, tablet: 175, laptop: 309, wide: 196 }}
              zIndex={2}
            />
            <ItemCard
              number={thirdCardData?.number}
              text={thirdCardData?.description}
              positionHorizontal={{ _: 89, tablet: 225, laptop: 0, wide: 626 }}
              positionVertical={{ _: 200, tablet: 350, laptop: 618, wide: 400 }}
              zIndex={1}
            />
          </Box>
          <Layout flexBasis={[32, 77, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { TargetAudienceFifthDimensionBlock }
