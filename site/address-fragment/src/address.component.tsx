import React       from 'react'
import { useIntl } from 'react-intl'

import { Row }     from '@ui/layout'
import { Box }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }      from '@ui/text'

import messages    from './messages'

const Address = () => {
  const intl = useIntl()
  return (
    <>
    <Layout>
    <Column> 
      <Row display={['none', 'none', 'flex']}>
        <Box
          width='720px'
          height='255px'
          backgroundColor='dullBlack'
          display={['none', 'none', 'flex']}
        >
          <Layout flexBasis={138} />
          <Column width='100%'>
            <Layout flexBasis={52} />
            <Layout>
              <Text color='white' fontWeight='semiBold' fontSize='big' lineHeight='large'>
                {intl.formatMessage(messages.addressHeader)}
              </Text>
            </Layout>
            <Layout flexBasis={60} />
            <Layout>
              <Text color='white' fontWeight='semiBold' fontSize='big' lineHeight='semiNormal'>
                {intl.formatMessage(messages.addressCity)}
              </Text>
            </Layout>
            <Layout flexBasis={20} />
            <Layout>
              <Text color='white' fontWeight='semiBold' fontSize='big' lineHeight='semiNormal'>
                {intl.formatMessage(messages.addressStreet)}
              </Text>
            </Layout>
            <Layout flexBasis={52} />
          </Column>
          <Layout flexBasis={119} />
        </Box>
        <Layout width='720px' height='255px'>
          yandex map
        </Layout>
      </Row>
      <Layout flexBasis={60} flexShrink={0}/>
      </Column>
      </Layout>
      <Layout display={['flex', 'flex', 'none']} width='320px'>
        <Column width='100%'>
          <Box backgroundColor='dullBlack' width='320' height='160px'>
            <Layout flexBasis={40} />
            <Column width='100%'>
              <Layout flexBasis={25} />
              <Layout>
                <Text color='white' fontSize='large' fontWeight='bold'>
                  {intl.formatMessage(messages.addressHeaderMobile)}
                </Text>
              </Layout>
              <Layout flexBasis={25} />
              <Layout>
                <Text color='white' fontSize='large' fontWeight='normal' lineHeight='semiSmall'>
                  {intl.formatMessage(messages.addressMobile)}
                </Text>
              </Layout>
              <Layout>
                <Text color='white' fontSize='large' fontWeight='normal' lineHeight='semiSmall'>
                  {intl.formatMessage(messages.addressStreetMobile)}
                </Text>
              </Layout>
              <Layout>
                <Text color='white' fontSize='large' fontWeight='normal' lineHeight='semiSmall'>
                  {intl.formatMessage(messages.addressLaneMobule)}
                </Text>
              </Layout>
              <Layout flexBasis={25} />
            </Column>
            <Layout flexBasis={20} />
          </Box>
          <Layout>yandex map</Layout>
        </Column>
      </Layout>
    </>
  )
}

export { Address }
