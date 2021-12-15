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
import { Social }     from './social'

const Header: FC = () => {
  const intl = useIntl()
  const textMobileTop = [messages.instructor, messages.instructorName, messages.linkMobile]
  const textMobileBottom = [
    messages.drum,
    messages.rythmMobile,
    messages.instructorAbout,
    messages.reviews,
  ]
  const textDesktop = [messages.instructor, messages.instructorName, messages.whatsUp]
  return (
    <Box
      width={['320px', '320px', '100%']}
      height={['355px', '355px', '285px']}
      justifyContent='center'
    >
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Row>
          <Layout width='214px' height='216px' flexShrink={0}>
            <ImageBlock />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={66} />
            <Row>
              <Column>
                {textDesktop.map((item) => (
                  <>
                    <Layout>
                      <Text
                        color={item === messages.instructorName ? 'dullRed' : 'dullBlack'}
                        fontSize='large'
                        fontWeight='bold'
                        lineHeight='semiNormal'
                      >
                        {intl.formatMessage(item)}
                      </Text>
                    </Layout>
                    <Layout flexBasis={20} />
                  </>
                ))}
              </Column>
              <Layout flexBasis={250} flexShrink={0} />
            </Row>
            <Layout flexBasis={18} />
            <Layout width='300px' overflow='visible' style={{ zIndex: 1 }}>
              <Navigation />
            </Layout>
          </Column>
          <Box backgroundColor='dullRed' width='375px' height='285px' flexShrink={0}>
            <Column width='100%'>
              <Layout flexBasis={102} />
              <Social />
            </Column>
          </Box>
          <Layout flexBasis={120} flexShrink={0} />
        </Row>
      </Layout>
      <Row display={['flex', 'flex', 'none']} justifyContent='center'>
        <Box flexBasis={115} flexShrink={0} />
        <Layout
          justifyContent='center'
          width='100px'
          overflow='visible'
          style={{ zIndex: 1 }}
          flexShrink={0}
        >
          <Column width='100%' alignItems='center'>
            <Layout flexBasis={30} />
            {textMobileTop.map((item) => (
              <>
                <Layout>
                  <Text
                    whiteSpace='nowrap'
                    color='dullBlack'
                    fontSize='small'
                    fontWeight='bold'
                    lineHeight='semiNormal'
                  >
                    {intl.formatMessage(item)}
                  </Text>
                </Layout>
                <Layout flexBasis={14} />
              </>
            ))}
            <Layout width='80px' height='80px'>
              <ImageBlock />
            </Layout>
            <Layout flexBasis={14} />
            {textMobileBottom.map((item) => (
              <>
                <Layout>
                  <Text
                    whiteSpace='nowrap'
                    color='dullBlack'
                    fontSize='small'
                    lineHeight='semiSmall'
                    fontWeight='normal'
                  >
                    {intl.formatMessage(item)}
                  </Text>
                </Layout>
                <Layout flexBasis={14} flexShrink={0} />
              </>
            ))}
          </Column>
        </Layout>
        <Box backgroundColor='dullRed' width='105px' flexShrink={0} />
      </Row>
    </Box>
  )
}

export { Header }
