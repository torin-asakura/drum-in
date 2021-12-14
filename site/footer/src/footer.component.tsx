import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Button }     from '@ui/button'
import { ImageBlock } from '@ui/image'
import { Text }       from '@ui/text'

import messages       from './messages'

const Footer: FC = () => {
  const intl = useIntl()
  return (
    <Layout width={['320px', '320px', '100%']} height={['730px', '730px', '570px']}>
      <Box
        width='100%'
        height='100%'
        display={['none', 'none', 'flex']}
        justifyContent='center'
        backgroundColor='dullBlack'
      >
        <Layout width='1440px'>
          <Row>
            <Layout flexBasis='138px' flexShrink={0} />
            <Column>
              <Layout flexBasis={60} />
              <Layout>
                <Text color='white' fontWeight='bold' fontSize='large' lineHeight='semiNormal'>
                  {intl.formatMessage(messages.whatsUp)}
                </Text>
              </Layout>
              <Layout flexBasis={56} />
              <Row>
                <Layout width='48px' height='48px'>
                  <ImageBlock />
                </Layout>
                <Layout flexBasis={103} flexShrink={0} />
                <Layout width='48px' height='48px'>
                  <ImageBlock />
                </Layout>
                <Layout flexBasis={103} flexShrink={0} />
                <Layout width='48px' height='48px'>
                  <ImageBlock />
                </Layout>
                <Layout flexBasis={103} flexShrink={0} />
                <Layout width='48px' height='48px'>
                  <ImageBlock />
                </Layout>
              </Row>
            </Column>
            <Layout flexBasis='800px' flexShrink={0} />
          </Row>
        </Layout>
      </Box>
      <Box
        width='320px'
        height='400px'
        display={['flex', 'flex', 'none']}
        backgroundColor='dullBlack'
      >
        <Layout flexBasis={30} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={30} />
          <Layout>
            <Button size='normal' width='240px'>
              <Layout>
                <Text color='white' fontWeight='bold' fontSize='normal' lineHeight='semiRegular'>
                  {intl.formatMessage(messages.signUp)}
                </Text>
              </Layout>
            </Button>
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='regular' lineHeight='small'>
              {intl.formatMessage(messages.linkMobile)}
            </Text>
          </Layout>
          <Layout flexBasis={50} />
          <Row justifyContent='center'>
            <Layout width='48px' height='48px'>
              <ImageBlock />
            </Layout>
            <Layout flexBasis={100} flexShrink={0} />
            <Layout width='48px' height='48px'>
              <ImageBlock />
            </Layout>
          </Row>
          <Layout flexBasis={100} flexShrink={0} />
          <Row justifyContent='center'>
            <Layout width='48px' height='48px'>
              <ImageBlock />
            </Layout>
            <Layout flexBasis={100} flexShrink={0} />
            <Layout width='48px' height='48px'>
              <ImageBlock />
            </Layout>
          </Row>
        </Column>
        <Layout flexBasis={30} />
      </Box>
    </Layout>
  )
}

export { Footer }
