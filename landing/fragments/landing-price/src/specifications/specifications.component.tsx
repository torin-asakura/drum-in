import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

const Specifications = () => (
  <Box display={['flex', 'flex', 'none']}>
    <Column>
      <Box>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
          lineHeight='primary'
          color='text.blackAmber'
        >
          <FormattedMessage
            id='landing_price.thirty_nine_video_lessons'
            defaultMessage='• 39 видео-уроков'
          />
        </Text>
      </Box>
      <Layout flexBasis={[4, 6, 0]} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
          lineHeight='primary'
          color='text.blackAmber'
        >
          <FormattedMessage id='landing_price.five_months' defaultMessage='• 5 месяцев' />
        </Text>
      </Box>
      <Layout flexBasis={[4, 6, 0]} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
          lineHeight='primary'
          color='text.blackAmber'
        >
          <FormattedMessage id='landing_price.three_level' defaultMessage='• 3 уровня' />
        </Text>
      </Box>
    </Column>
  </Box>
)
export { Specifications }
