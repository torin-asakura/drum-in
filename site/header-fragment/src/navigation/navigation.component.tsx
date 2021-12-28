import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'
import { Link }    from '@ui/link'

import messages    from '../messages'

const Navigation = () => {
  const intl = useIntl()
  return (
    <Box
      width='995px'
      height='44px'
      flexShrink={0}
      alignItems='center'
      zIndex={2}
      display={['none', 'none', 'flex']}
      backgroundColor='semiTransparent'
    >
      <Layout flexBasis={11} flexShrink={0} />
      <Row justifyContent='center' alignItems='center'>
        <Link href='#course'>
          <Layout>
            <Text variant='navigationContent'>{intl.formatMessage(messages.rythm)}</Text>
          </Layout>
        </Link>
        <Layout flexBasis={45} />
        <Link href='#lessons'>
          <Layout>
            <Text variant='navigationContent'>{intl.formatMessage(messages.drum)}</Text>
          </Layout>
        </Link>
        <Layout flexBasis={45} />
        <Link href='#about'>
          <Layout>
            <Text variant='navigationContent'>{intl.formatMessage(messages.instructorAbout)}</Text>
          </Layout>
        </Link>
        <Layout flexBasis={45} />
        <Link href='#reviews'>
          <Layout>
            <Text variant='navigationContent'>{intl.formatMessage(messages.reviews)}</Text>
          </Layout>
        </Link>
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
