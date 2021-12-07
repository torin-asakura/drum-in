import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'
import { Layout }  from '@ui/layout'
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
    >
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={11} />
        <Layout style={{ border: '1px solid black' }}>{intl.formatMessage(messages.rythm)}</Layout>
        <Layout flexBasis={130} />
        <Layout style={{ border: '1px solid black' }}>{intl.formatMessage(messages.drum)}</Layout>
        <Layout flexBasis={130} />
        <Layout style={{ border: '1px solid black' }}>
          {intl.formatMessage(messages.instructorAbout)}
        </Layout>
        <Layout flexBasis={130} />
        <Layout style={{ border: '1px solid black' }}>
          {intl.formatMessage(messages.reviews)}
        </Layout>
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
