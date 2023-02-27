import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

const Title = () => (
  <>
    <Box display={['none', 'none', 'flex']}>
      <Text
        textTransform='uppercase'
        fontFamily='secondary'
        fontWeight='bold'
        fontSize='gigantic'
        lineHeight='default'
        color='text.blackAmber'
      >
        <FormattedMessage
          id='landing_price.eight_thousand_seven_hundred_rubles'
          defaultMessage='8 700 ₽/мес'
        />
      </Text>
    </Box>
    <Box display={['flex', 'flex', 'none']}>
      <Box flexShrink={0}>
        <Text
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiBig', 'semiExtra', 'semiExtra']}
          lineHeight='default'
          color='text.blackAmber'
        >
          <FormattedMessage
            id='landing_price.eight_thousand_seven_hundred'
            defaultMessage='8 700'
          />
          <Space />
        </Text>
      </Box>
      <Box flexShrink={0}>
        <Text
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiRegular', 'semiModerate', 'semiModerate']}
          lineHeight='default'
          color='text.blackAmber'
        >
          <FormattedMessage id='landing_price.rubles_per_month' defaultMessage='₽/мес' />
        </Text>
      </Box>
    </Box>
  </>
)
export { Title }
