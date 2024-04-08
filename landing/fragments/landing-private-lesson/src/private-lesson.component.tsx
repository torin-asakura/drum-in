import React                       from 'react'
import { FC }                      from 'react'
import { forwardRef }              from 'react'

import { RightDownArrowIcon }      from '@ui/icons'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Text }                    from '@ui/text'

import { LeftColumn }              from './left-column'
import { PrivateLessonBlockProps } from './private-lesson.interfaces'
import { RightColumn }             from './right-column'

const PrivateLessonBlock: FC<PrivateLessonBlockProps> = forwardRef((
  { privateLessonData },
  ref: any
) => (
  <Row justifyContent='center' ref={ref}>
    <Box fill>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[24, 60, 90]} />
        <Box width={['100%', 700, 0]} display={['flex', 'flex', 'none']}>
          <Text
            display='inline'
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['regular', 'moderate', 'big']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {privateLessonData?.title}
          </Text>
        </Box>
        <Layout flexBasis={[24, 34, 0]} display={['flex', 'flex', 'none']} />
        <Box
          width='100%'
          backgroundColor='background.smokyWhite'
          borderRadius={['extra', 'extra', 'bigger']}
        >
          <Column width='100%'>
            <Layout flexBasis={[40, 46, 52]} />
            <Row>
              <Layout flexBasis={[24, 38, 52]} flexShrink={0} />
              <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
                <LeftColumn privateLessonData={privateLessonData} />
                <Box display={['none', 'none', 'flex']} alignItems='center' height='100%'>
                  <RightDownArrowIcon width={105} height={130} />
                </Box>
                <RightColumn privateLessonData={privateLessonData} />
              </Row>
              <Layout flexBasis={[24, 38, 52]} flexShrink={0} flexGrow={3}/>
            </Row>
            <Layout flexBasis={[23, 40, 52]} />
          </Column>
        </Box>
        <Layout flexBasis={[24, 60, 90]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Row>
))
export { PrivateLessonBlock }
