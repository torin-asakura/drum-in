import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SliderBlock }      from './slider'

const ChooseCourseBlock = () => (
  <Row>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={60} />
      <Row justifyContent='center'>
        <Box width={['100%', '100%', 1920]}>
          <Box width={['100%', '100%', 630]}>
            <Text
              textTransform='uppercase'
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['regular', 'semiIncreased', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_choose_course.choose_your_course'
                defaultMessage='Выберете свой курс'
              />
            </Text>
          </Box>
        </Box>
      </Row>
      <Layout flexBasis={[24, 44, 64]} />
      <SliderBlock />
      <Layout flexBasis={[32, 60, 90]} />
    </Column>
  </Row>
)
export { ChooseCourseBlock }
