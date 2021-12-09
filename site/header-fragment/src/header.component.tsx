import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

import { Navigation } from './navigation'
import messages       from './messages'

const Header: FC = () => {
  const intl = useIntl()
  return (
    <Box
      width={['320px', '320px', '1440px']}
      height={['355px', '355px', '285px']}
      overflow='hidden'
      position='relative'
      zIndex={0}
    >
      <Row justifyContent='center'>
        <Layout flexBasis={20} display={['none', 'none', 'flex']} />
        <Layout width='214px' height='216px' display={['none', 'none', 'flex']}>
          <ImageBlock />
        </Layout>
        <Layout flexBasis={20} display={['none', 'none', 'flex']} />
        <Box zIndex={[1, 1, 5]} position='relative'>
          <Column width='100%' alignItems={['center', 'center', 'flex-start']}>
            <Layout flexBasis={[30, 30, 30]} flexShrink={0} />
            <Layout>
              <Text
                color='dullBlack'
                fontSize={['small', 'small', 'large']}
                fontWeight='bold'
                lineHeight='semiNormal'
              >
                {intl.formatMessage(messages.instructor)}
              </Text>
            </Layout>
            <Layout flexBasis={[14, 14, 20]} flexShrink={0} />
            <Layout>
              <Text
                color={['dullBlack', 'dullBlack', 'dullRed']}
                fontSize={['small', 'small', 'large']}
                fontWeight='bold'
                lineHeight='semiNormal'
              >
                {intl.formatMessage(messages.instructorName)}
              </Text>
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout display={['flex', 'flex', 'none']}>
              <Text
                color='dullBlack'
                fontSize={['small', 'small', 'large']}
                fontWeight='bold'
                lineHeight={['semiSmall', 'semiSmall', 'semiNormal']}
              >
                {intl.formatMessage(messages.linkMobile)}{' '}
              </Text>
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout flexBasis={[0, 0, 35]} flexShrink={0} />
            <Layout display={['none', 'none', 'flex']}>
              <Text color='dullBlack' fontSize='large' fontWeight='bold' lineHeight='semiNormal'>
                {intl.formatMessage(messages.whatsUp)}
              </Text>
            </Layout>
            <Layout flexBasis={35} flexShrink={0} display={['none', 'none', 'flex']} />

            <Column
              width='100%'
              display={['flex', 'flex', 'none']}
              alignItems='center'
              justifyContent='center'
            >
              <Layout width='80px' height='80px' display={['flex', 'flex', 'none']}>
                <ImageBlock />
              </Layout>
              <Layout flexBasis={10} />
              <Layout display={['flex', 'flex', 'none']}>
                <Text color='dullBlack' fontSize='small' lineHeight='semiSmall' fontWeight='normal'>
                  {intl.formatMessage(messages.drum)}{' '}
                </Text>
              </Layout>
              <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
              <Layout display={['flex', 'flex', 'none']}>
                <Text color='dullBlack' fontSize='small' lineHeight='semiSmall' fontWeight='normal'>
                  {intl.formatMessage(messages.rythmMobile)}
                </Text>
              </Layout>
              <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
              <Layout display={['flex', 'flex', 'none']}>
                <Text color='dullBlack' fontSize='small' lineHeight='semiSmall' fontWeight='normal'>
                  {intl.formatMessage(messages.instructorAbout)}{' '}
                </Text>
              </Layout>
              <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
              <Layout display={['flex', 'flex', 'none']}>
                <Text color='dullBlack' fontSize='small' lineHeight='semiSmall' fontWeight='normal'>
                  {intl.formatMessage(messages.reviews)}{' '}
                </Text>
              </Layout>
            </Column>
            <Layout>
              <Navigation />
            </Layout>
          </Column>
        </Box>
        <Layout flexBasis={425} display={['none', 'none', 'flex']} />
        <Box
          width={['105px', '105px', '375px']}
          height={['355px', '355px', '285px']}
          flexShrink={0}
          backgroundColor='dullRed'
          position={['absolute', 'absolute', 'relative']}
          left={[215, 215, 0]}
          zIndex={[-1, -1, 0]}
        >
          <Column width='100%'>
            <Layout flexBasis={106} />
            <Row>
              <Layout flexBasis={[14, 14, 71]} flexShrink={0} />
              <Box
                height='17px'
                width='18px'
                border='1px solid black'
                display={['none', 'none', 'flex']}
              />
              <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
              <Box
                height='17px'
                width='18px'
                border='1px solid black'
                display={['none', 'none', 'flex']}
              >
                <Layout>{/* inst */}</Layout>
              </Box>
              <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
              <Box
                height='17px'
                width='18px'
                border='1px solid black'
                display={['none', 'none', 'flex']}
              >
                <Layout>{/* whatsapp */}</Layout>
              </Box>
              <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
              <Box
                height='17px'
                width='18px'
                border='1px solid black'
                display={['none', 'none', 'flex']}
              >
                <Layout>{/* vk */}</Layout>
              </Box>
              <Layout flexBasis={[14, 14, 78]} flexShrink={0} />
            </Row>
          </Column>
        </Box>
        <Layout flexShrink={0} flexBasis={[0, 0, 118]} />
      </Row>
    </Box>
  )
}

export { Header }
