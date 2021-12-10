import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

import messages       from './messages'

const Education: FC = () => {
  const intl = useIntl()
  return (
    <Box width={['320px', '320px', '1440px']}>
      <Column width='100%' display={['none', 'none', 'flex']}>
        <Layout flexBasis={60} flexShrink={0} />
        <Row>
          <Layout flexBasis={138} flexShrink={0} />
          <Column width='100%'>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontSize='big' fontWeight='semiBold'>
                {intl.formatMessage(messages.educationHeader)}
              </Text>
            </Layout>
            <Layout flexBasis={50} />
            <Layout>
              <Text color='dullBlack' fontSize='normal' fontWeight='normal' lineHeight='normal'>
                {intl.formatMessage(messages.drumClass)}{' '}
              </Text>
            </Layout>
            <Layout flexBasis={25} />
            <Layout>
              <Text color='dullBlack' fontSize='normal' fontWeight='normal' lineHeight='normal'>
                {intl.formatMessage(messages.drumWorkshop)}
              </Text>
            </Layout>
            <Layout flexBasis={25} />
            <Layout>
              <Text color='dullBlack' fontSize='normal' fontWeight='normal' lineHeight='normal'>
                {intl.formatMessage(messages.maimonid)}
              </Text>
            </Layout>
          </Column>
          <Layout flexBasis={118} flexShrink={0} />
          <Layout width='538px' height='364px'>
            <ImageBlock />
          </Layout>
          <Layout flexBasis={74} flexShrink={0} />
        </Row>
        <Layout flexBasis={65} />
      </Column>
      <Column width='100%' display={['flex', 'flex', 'none']} alignItems='center'>
        <Layout flexBasis={25} flexShrink={0} />
        <Row>
          <Layout flexBasis={44} flexShrink={0} />
          <Column width='100%'>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='semiBold' fontSize='regular'>
                {intl.formatMessage(messages.educationHeader)}{' '}
              </Text>
            </Layout>
            <Layout flexBasis={12} />
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.drumClass)}{' '}
              </Text>
            </Layout>
            <Layout flexBasis={25} />
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.drumWorkshop)}{' '}
              </Text>
            </Layout>
            <Layout flexBasis={25} />
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.maimonid)}{' '}
              </Text>
            </Layout>
            <Layout flexBasis={20} />
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout>
          <ImageBlock />
        </Layout>
        <Layout flexBasis={30} />
        <Row justifyContent='center'>
          <Layout flexBasis={44} flexShrink={0} />
          <Column>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.experienceHeader)}{' '}
              </Text>
            </Layout>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.firstAlbum)}{' '}
              </Text>
            </Layout>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.concerts)}{' '}
              </Text>
            </Layout>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
                {intl.formatMessage(messages.orchestra)}{' '}
              </Text>
            </Layout>
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout flexBasis={15} />
        <Layout>
          <Text> {intl.formatMessage(messages.link)}</Text>
        </Layout>
        <Layout flexBasis={25} flexShrink={0} />
      </Column>
    </Box>
  )
}

export { Education }
