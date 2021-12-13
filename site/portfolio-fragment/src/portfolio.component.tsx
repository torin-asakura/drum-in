import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { ImageBlock } from '@ui/image'
import { Text }       from '@ui/text'

import messages       from './messages'

const Portfolio: FC = () => {
  const intl = useIntl()
  return (
    <Box width='1440px' height='1100px' display={['none', 'none', 'flex']}>
      <Column width='100%'>
        <Row>
          <Layout flexBasis={65} flexShrink={0} />
          <Column alignItems='center'>
            <Layout flexBasis={70} />
            <Box width='355px' height='64px' backgroundColor='dullRed' />
            <Layout width='505px' height='392px'>
              <ImageBlock />
            </Layout>
            <Box width='355px' height='74px' backgroundColor='dullRed' />
            <Layout width='505px' height='392px'>
              <ImageBlock />
            </Layout>
            <Box width='355px' height='45px' backgroundColor='dullRed' />
          </Column>
          <Layout flexBasis={160} flexShrink={0} />
          <Column>
            <Layout flexBasis='126px' />
            <Layout>
              <Column>
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.orchestra)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.jazz)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.blues)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.rock)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.raggey)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.trance)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.ethnic)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.girlsCover)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.albums)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
                    {intl.formatMessage(messages.groups)}
                  </Text>
                </Layout>
              </Column>
            </Layout>
            <Layout flexBasis={82} />
          </Column>
          <Layout flexBasis={143} flexShrink={0} />
        </Row>
        <Layout flexBasis={60} />
      </Column>
    </Box>
  )
}

export { Portfolio }
