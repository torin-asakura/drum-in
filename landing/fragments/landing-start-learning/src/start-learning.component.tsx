import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const StartLearningBlock = () => (
  <Box
    zIndex={10}
    position='fixed'
    left={0}
    bottom={[12, 26, 40]}
    width='100%'
    justifyContent='center'
  >
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Row display={['none', 'none', 'flex']}>
        <Button
          size='withoutPaddingSemiGiantHeight'
          variant='darkToPurpleBackgroundWithWhiteBorder'
          fill
        >
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='large'
            lineHeight='default'
          >
            <FormattedMessage
              id='landing_start_learning.start_learning'
              defaultMessage='начать обучение'
            />
          </Text>
        </Button>
      </Row>
      <Row display={['flex', 'flex', 'none']}>
        <Button
          size='withoutPaddingSemiRegularHeight'
          variant='darkToPurpleBackgroundWithWhiteBorder'
          fill
        >
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='semiMedium'
            lineHeight='default'
          >
            <FormattedMessage
              id='landing_start_learning.start_learning'
              defaultMessage='начать обучение'
            />
          </Text>
        </Button>
      </Row>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Box>
)

export { StartLearningBlock }
