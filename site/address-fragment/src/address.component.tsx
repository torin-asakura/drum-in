import React       from 'react'
import { useIntl } from 'react-intl'

import { Row }     from '@ui/layout'
import { Box }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import messages    from './messages'

const Address = () => {
  const intl = useIntl()
  return (
    <>
      <Row style={{ border: '1px solid black' }} display={['none', 'none', 'flex']}>
        <Box
          width='720px'
          height='255px'
          border='1px solid black'
          display={['none', 'none', 'flex']}
        >
          <Layout flexBasis={138} />
          <Column width='100%' style={{ border: '1px solid black' }}>
            <Layout flexBasis={52} />
            <Layout style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.addressHeader)}
            </Layout>
            <Layout flexBasis={60} />
            <Layout style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.addressCity)}
            </Layout>
            <Layout flexBasis={20} />
            <Layout style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.addressStreet)}
            </Layout>
            <Layout flexBasis={52} />
          </Column>
          <Layout flexBasis={119} />
        </Box>
        <Layout width='720px' height='255px' style={{ border: '1px solid black' }}>
          yandex map
        </Layout>
      </Row>
      <Layout display={['flex', 'flex', 'none']} width='320px'>
        <Column width='100%'>
          <Box border='1px solid black' width='320' height='160px'>
            <Layout flexBasis={40} />
            <Column width='100%' style={{ border: '1px solid black' }}>
              <Layout flexBasis={25} />
              <Layout style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.addressHeaderMobile)}
              </Layout>
              <Layout flexBasis={25} />
              <Layout style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.addressMobile)}
              </Layout>
              <Layout style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.addressStreetMobile)}
              </Layout>
              <Layout style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.addressLaneMobule)}
              </Layout>
              <Layout flexBasis={25} />
            </Column>
            <Layout flexBasis={20} />
          </Box>
          <Layout style={{ border: '1px solid black' }}>yandex map</Layout>
        </Column>
      </Layout>
    </>
  )
}

export { Address }