import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Link }             from '@ui/link'
import { Text }             from '@ui/text'

const BottomRow = () => (
  <Box
    width='100%'
    flexDirection={['column', 'column', 'row']}
    alignItems={['center', 'center', 'start']}
    justifyContent='space-between'
  >
    <Box>
      <NextLink path='/'>
        <Text
          textTransform='none'
          fontWeight='medium'
          fontSize={['micro', 'medium', 'regular']}
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage
            id='landing_footer.personal_data_processing_policy'
            defaultMessage='Политика обработки персональных данных'
          />
        </Text>
      </NextLink>
    </Box>
    <Layout flexBasis={12} display={['flex', 'flex', 'none']} />
    <Box>
      <Link href='mailto:druminpro@yandex.ru' target='_blank'>
        <Text fontFamily='secondary' fontWeight='bold' fontSize={['medium', 'large', 'moderate']}>
          <FormattedMessage
            id='landing_footer.druminpro_yandex_ru'
            defaultMessage='druminpro@yandex.ru'
          />
        </Text>
      </Link>
    </Box>
  </Box>
)

export { BottomRow }
