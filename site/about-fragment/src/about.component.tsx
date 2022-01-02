import React           from 'react'
import { useIntl }     from 'react-intl'

import { extractUrl }  from '@globals/data'
import { Row }         from '@ui/layout'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Text }        from '@ui/text'
import { ImageBlock }  from '@ui/image'

import messages        from './messages'
import { useFragment } from './data'

const About = () => {
  const intl = useIntl()
  const fragment = useFragment()

  return (
    <Box
      width={['320px', '320px', '100%']}
      backgroundColor={['white', 'white', 'dullBlack']}
      id='about'
    >
      <Row display={['none', 'none', 'flex']} justifyContent='center'>
        <Layout width='1440px'>
          <Layout flexBasis={138} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={50} />
            <Layout>
              <Text variant='leadTextHeader' fontSize='big' lineHeight='large'>
                {fragment?.title}
              </Text>
            </Layout>
            <Layout flexBasis={50} />
            <Layout>
              <Text fontSize='normal' lineHeight='large' variant='leadTextContent'>
                {fragment?.content}
              </Text>
            </Layout>
            <Layout flexBasis={50} />
          </Column>
          <Layout flexBasis={115} flexShrink={0} />
          <Column>
            <Layout flexBasis={64} />
            <Layout width='530px' height='311px'>
              <ImageBlock
                src={extractUrl(fragment?.addons.picture)}
                alt={fragment?.addons.picture.altText}
              />
            </Layout>
            <Layout flexBasis={64} />
          </Column>
          <Layout flexBasis={74} flexShrink={0} />
        </Layout>
      </Row>
      <Column width='100%' display={['flex', 'flex', 'none']}>
        <Layout flexBasis={25} flexShrink={0} />
        <Row>
          <Layout flexBasis={44} flexShrink={0} />
          <Column width='100%'>
            <Layout>
              <Text color='black' fontWeight='bold' lineHeight='normal' fontSize='small'>
                {fragment?.title}
              </Text>
            </Layout>
            <Layout flexBasis={12} />
            <Layout>
              <Text color='dullBlack' fontWeight='semiBold' lineHeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.experience)}
              </Text>
            </Layout>
            <Layout flexBasis={40} />
            <Layout>
              <Text
                color='dullBlack'
                lineHeight='normal'
                fontWeight='normal'
                fontSize='regular'
                textAlign='justify'
              >
                {fragment?.content}
              </Text>
            </Layout>
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout flexBasis={25} flexShrink={0} />
      </Column>
    </Box>
  )
}

export { About }
