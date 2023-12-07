import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'

import { Button }             from '@ui/button'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { StartLearningProps } from './start-learning.interfaces'

const StartLearningBlock: FC<StartLearningProps> = ({ onClick, onClickMobile }) => (
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
          onClick={onClick}
          fill
        >
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='large'
            lineHeight='default'
          >
            <FormattedMessage id='landing_start_learning.start_learning' />
          </Text>
        </Button>
      </Row>
      <Row display={['none', 'flex', 'none']}>
        <Button
          size='withoutPaddingSemiRegularHeight'
          variant='darkToPurpleBackgroundWithWhiteBorder'
          onClick={onClick}
          fill
        >
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='semiMedium'
            lineHeight='default'
          >
            <FormattedMessage id='landing_start_learning.start_learning' />
          </Text>
        </Button>
      </Row>
      <Row display={['flex', 'none', 'none']}>
        <Button
          size='withoutPaddingSemiRegularHeight'
          variant='darkToPurpleBackgroundWithWhiteBorder'
          onClick={onClickMobile}
          fill
        >
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='semiMedium'
            lineHeight='default'
          >
            <FormattedMessage id='landing_start_learning.start_learning' />
          </Text>
        </Button>
      </Row>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Box>
)

export { StartLearningBlock }
