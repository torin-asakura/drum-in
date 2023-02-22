import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

const Buttons = () => (
  <>
    <Box display={['none', 'flex', 'flex']} order={[7, 7, 0]} width={['100%', '100%', 514]}>
      <Button size='withoutPaddingBigHeight' variant='purpleBackground' fill>
        <Text fontWeight='semiBold' fontSize={['micro', 'semiRegular', 'large']}>
          <FormattedMessage id='landing_private_lesson.sign_up' defaultMessage='Записаться' />
        </Text>
      </Button>
    </Box>
    <Row display={['flex', 'none', 'none']} order={7}>
      <Button size='withoutPaddingMediumHeight' variant='purpleBackground' fill>
        <Text fontWeight='semiBold' fontSize='micro'>
          <FormattedMessage id='landing_private_lesson.sign_up' defaultMessage='Записаться' />
        </Text>
      </Button>
    </Row>
  </>
)
export { Buttons }
