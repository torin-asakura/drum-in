import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { DesktopSlider }    from './desktop-slider'
import { MobileSlider }     from './mobile-slider'

const CourseProcessBlock = () => (
  <Row justifyContent='center' flexWrap='wrap'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column>
        <Layout flexBasis={[48, 68, 90]} />
        <Box width={['100%', 400, 800]}>
          <Text
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['regular', 'moderate', 'big']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage
              id='landing_course_process.how_is_the_training_going'
              defaultMessage='как проходит обучение'
            />
          </Text>
        </Box>
        <Layout flexBasis={[24, 60, 101]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
    <DesktopSlider />
    <MobileSlider />
  </Row>
)
export { CourseProcessBlock }
