import React                   from 'react'
import { FC }                  from 'react'

import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { Info }                from './info'
import { SelectedCourseProps } from './selected-course.interfaces'

const SelectedCourse: FC<SelectedCourseProps> = ({ title, description }) => (
  <Box
    width='100%'
    backgroundColor='background.transparentWhite'
    borderRadius={['semiMedium', 'medium', 'medium']}
  >
    <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
      <Row alignItems='center' justifyContent='space-between'>
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['micro', 'medium', 'medium']}
            lineHeight={['primary', 'medium', 'medium']}
            color='text.smokyWhite'
          >
            {title}
          </Text>
        </Box>
        <Info description={description} />
      </Row>
      <Layout flexBasis={[12, 12, 16]} flexShrink={0} />
    </Column>
    <Layout flexBasis={[13, 13, 18]} flexShrink={0} />
  </Box>
)

export { SelectedCourse }
