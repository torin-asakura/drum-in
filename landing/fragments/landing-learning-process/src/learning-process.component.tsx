import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SliderBottom }     from './slider-bottom'
import { SliderTop }        from './slider-top'

const LearningProcessBlock = () => (
  <>
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column>
          <Layout flexBasis={[64, 79, 94]} />
          <Box width={['100%', '100%', 800]}>
            <Text
              textTransform='uppercase'
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['regular', 'mild', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_learning_process.during_the_training_you_will_find'
                defaultMessage='Во время обучения вас ждет'
              />
            </Text>
          </Box>
          <Layout flexBasis={[24, 46, 68]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
    <Box>
      <Column>
        <SliderTop />
        <Layout flexBasis={[16, 28, 40]} />
        <SliderBottom />
        <Layout flexBasis={[64, 77, 90]} />
      </Column>
    </Box>
  </>
)
export { LearningProcessBlock }
