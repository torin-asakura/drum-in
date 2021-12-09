import React          from 'react'
import { useIntl }    from 'react-intl'

import { Row }        from '@ui/layout'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }         from '@ui/text'
import { ImageBlock } from '@ui/image'

import messages       from './messages'

const About = () => {
  const intl = useIntl()
  return (
    <Box width={['320px', '320px', '1440px']} backgroundColor={['white', 'white', 'dullBlack']}>
      <Row display={['none', 'none', 'flex']}>
        <Layout flexBasis={138} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={50} />
          <Layout>
            <Text color='white' fontWeight='semiBold' fontSize='big' lineHeight='large'>
              {intl.formatMessage(messages.aboutHeader)}
            </Text>
          </Layout>
          <Layout flexBasis={50} />
          <Layout>
            <Text color='white' fontWeight='semiBold' fontSize='normal' lineHeight='large'>
              {intl.formatMessage(messages.aboutContent)}
            </Text>
          </Layout>
          <Layout flexBasis={50} />
        </Column>
        <Layout flexBasis={115} flexShrink={0} />
        <Column>
          <Layout flexBasis={64} />
          <Layout width='530px' height='311px'>
            <ImageBlock />
          </Layout>
          <Layout flexBasis={64} />
        </Column>
        <Layout flexBasis={74} flexShrink={0} />
      </Row>
      <Column width='100%' display={['flex', 'flex', 'none']}>
        <Layout flexBasis={25} flexShrink={0} />
        <Row>
          <Layout flexBasis={44} flexShrink={0} />
          <Column width='100%'>
            <Layout>{intl.formatMessage(messages.aboutHeader)}</Layout>
            <Layout flexBasis={12} />
            <Layout>{intl.formatMessage(messages.aboutContent)}</Layout>
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout flexBasis={25} flexShrink={0} />
      </Column>
    </Box>
  )
}

export { About }
