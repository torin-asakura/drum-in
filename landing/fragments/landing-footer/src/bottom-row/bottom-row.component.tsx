import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Link }             from '@ui/link'
import { Text }             from '@ui/text'

const BottomRow = ({ footer }) => (
  <Box
    width='100%'
    flexDirection={['column', 'column', 'row']}
    alignItems={['center', 'center', 'end']}
    justifyContent='space-between'
  >
    <Box>
      <NextLink path={footer?.privacyPolicy}>
        <Text
          textTransform='none'
          fontWeight='medium'
          fontSize={['micro', 'medium', 'regular']}
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage id='footer.privacy_policy' />
        </Text>
      </NextLink>
    </Box>
    <Layout flexBasis={12} display={['flex', 'flex', 'none']} />
    <Box>
      <Link href={`mailto:${footer?.email}`} target='_blank'>
        <Text fontFamily='secondary' fontWeight='bold' fontSize={['medium', 'large', 'moderate']}>
          {footer?.email}
        </Text>
      </Link>
    </Box>
  </Box>
)

export { BottomRow }
