import React           from 'react'
import { useIntl }     from 'react-intl'

import { Row }         from '@ui/layout'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Text }        from '@ui/text'

import messages        from './messages'
import { useFragment } from './data'

const Address = () => {
  const intl = useIntl()
  const fragment = useFragment()

  const Map = () => <iframe src={fragment?.addons.prefix} width='100%' height='100%' />

  return (
    <>
      <Layout width='100%'>
        <Column width='100%'>
          <Row display={['none', 'none', 'flex']}>
            <Box
              width='100%'
              height='255px'
              backgroundColor='dullBlack'
              justifyContent='flex-end'
              display={['none', 'none', 'flex']}
            >
              <Layout width='720px'>
                <Layout flexBasis={138} />
                <Column width='100%'>
                  <Layout flexBasis={52} />
                  <Layout>
                    <Text color='white' fontWeight='semiBold' fontSize='big' lineHeight='large'>
                      {fragment?.title}
                    </Text>
                  </Layout>
                  <Layout flexBasis={60} />
                  <Layout>
                    <Text
                      color='white'
                      fontWeight='semiBold'
                      fontSize='large'
                      lineHeight='semiNormal'
                    >
                      {fragment?.content}
                    </Text>
                  </Layout>
                  <Layout flexBasis={52} />
                </Column>
                <Layout flexBasis={119} />
              </Layout>
            </Box>
            <Layout width='100%' height='255px'>
              <Map />
            </Layout>
          </Row>
          <Layout flexBasis={60} flexShrink={0} />
        </Column>
      </Layout>
      <Layout display={['flex', 'flex', 'none']} width='320px'>
        <Column width='100%'>
          <Box backgroundColor='dullBlack' width='320' height='160px'>
            <Layout flexBasis={40} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={25} />
              <Layout>
                <Text color='white' fontSize='small' lineHeight='semiSmall' fontWeight='bold'>
                  {fragment?.title}
                </Text>
              </Layout>
              <Layout flexBasis={50} flexShrink={0} />
              <Layout>
                <Text color='white' fontSize='small' fontWeight='normal' lineHeight='semiSmall'>
                  {fragment?.content}
                </Text>
              </Layout>
              <Layout flexBasis={25} />
            </Column>
            <Layout flexBasis={20} flexShrink={0} />
          </Box>
          <Layout height='183px'>
            <Map />
          </Layout>
        </Column>
      </Layout>
    </>
  )
}

export { Address }
