import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'

import { Navigation } from './navigation'
import messages       from './messages'

const Header: FC = () => {
  const intl = useIntl()
  return (
    <Box
      width={['320px', '320px', '1440px']}
      height={['355px', '355px', '285px']}
      border='1px solid black'
      position='relative'
      zIndex={0}
    >
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={20} display={['none', 'none', 'flex']} />
        <Layout style={{ border: '1px solid black' }}> {/* Logo */} </Layout>
        <Layout flexBasis={22} flexShrink={0} display={['none', 'none', 'flex']} />
        <Box
          width='100%'
          zIndex={[1, 1, 5]}
          position='relative'
          style={{ border: '1px solid black' }}
        >
          <Column
            width='100%'
            alignItems={['center', 'center', 'flex-start']}
            style={{ border: '1px solid black' }}
          >
            <Layout flexBasis={[30, 30, 66]} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.instructor)}
            </Layout>
            <Layout flexBasis={[14, 14, 20]} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.instructorName)}
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.linkMobile)}
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>logo</Layout>
            <Layout flexBasis={[20, 20, 35]} flexShrink={0} />
            <Layout display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
              {intl.formatMessage(messages.whatsUp)}
            </Layout>
            <Column
              width='100%'
              display={['flex', 'flex', 'none']}
              alignItems='center'
              justifyContent='center'
              style={{ border: '1px solid black' }}
            >
              <Layout display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.drum)}
              </Layout>
              <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
              <Layout display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.rythmMobile)}
              </Layout>
              <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
              <Layout display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.instructorAbout)}
              </Layout>
              <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
              <Layout display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
                {intl.formatMessage(messages.reviews)}
              </Layout>
            </Column>
            <Layout flexBasis={[20, 20, 35]} flexShrink={0} display={['none', 'none', 'flex']} />
            <Navigation />
          </Column>
        </Box>
        <Box
          width={['105px', '105px', '375px']}
          height={['355px', '355px', '285px']}
          flexShrink={0}
          border='1px solid black'
          position={['absolute', 'absolute', 'relative']}
          left={[215, 215, 0]}
          zIndex={[-1, -1, 0]}
        >
          <Column width='100%' style={{ border: '1px solid black' }}>
            <Layout flexBasis={106} />
            <Row style={{ border: '1px solid black' }}>
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
                <Layout style={{ border: '1px solid black' }}>{/* inst */}</Layout>
              </Box>
              <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
              <Box
                height='17px'
                width='18px'
                border='1px solid black'
                display={['none', 'none', 'flex']}
              >
                <Layout style={{ border: '1px solid black' }}>{/* whatsapp */}</Layout>
              </Box>
              <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
              <Box
                height='17px'
                width='18px'
                border='1px solid black'
                display={['none', 'none', 'flex']}
              >
                <Layout style={{ border: '1px solid black' }}>{/* vk */}</Layout>
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
