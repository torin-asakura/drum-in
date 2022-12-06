import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SliderBlock }      from './slider'

const ChooseCourseBlock = () => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={60} />
        <Box width={[270, 500, 630]}>
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
        <Layout flexBasis={[24, 44, 64]} />
        <SliderBlock />
        <Layout flexBasis={[32, 60, 90]} />
      </Column>
    </Box>
  </Row>
)
export { ChooseCourseBlock }
