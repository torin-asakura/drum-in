import React                      from 'react'
import { FC }                     from 'react'

import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { ChooseCourseBlockProps } from './choose-course.interfaces'
import { SliderBlock }            from './slider'

const ChooseCourseBlock: FC<ChooseCourseBlockProps> = ({ mainPageData }) => (
  <Row justifyContent='center' id='choose-course'>
    <Box width={['100%', '100%', 1920]}>
      <Column width='100%'>
        <Layout flexBasis={60} />
        <Box width={[290, 530, 670]}>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['regular', 'semiIncreased', 'big']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {mainPageData?.chooseCourse?.title}
          </Text>
        </Box>
        <Layout flexBasis={[24, 44, 64]} />
        <SliderBlock chooseCourseData={mainPageData.chooseCourse} />
        <Layout flexBasis={[32, 60, 90]} />
      </Column>
    </Box>
  </Row>
)
export { ChooseCourseBlock }
