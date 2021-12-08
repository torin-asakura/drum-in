import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const Navigation = () => {
  const intl = useIntl()
  return (
    <Box
      width='1015px'
      zIndex={10}
      position='absolute'
      top='200px'
      flexShrink={0}
      display={['none', 'none', 'flex']}
      backgroundColor='semiTransparent'
    >
      <Row justifyContent='center'>
        <Layout flexBasis={11} />
        <Layout>
          <Text color='black' fontSize='big' fontWeight='normal' lineHeight='regular'>
            {intl.formatMessage(messages.rythm)}
          </Text>
        </Layout>
        <Layout flexBasis={180} />
        <Layout>
          <Text color='black' fontSize='big' fontWeight='normal' lineHeight='regular'>
            {intl.formatMessage(messages.drum)}
          </Text>
        </Layout>
        <Layout flexBasis={180} />
        <Layout>
          <Text color='black' fontSize='big' fontWeight='normal' lineHeight='regular'>
            {intl.formatMessage(messages.instructorAbout)}{' '}
          </Text>
        </Layout>
        <Layout flexBasis={180} />
        <Layout>
          <Text color='black' fontSize='big' fontWeight='normal' lineHeight='regular'>
            {intl.formatMessage(messages.reviews)}
          </Text>
        </Layout>
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
