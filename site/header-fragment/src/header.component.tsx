import React                 from 'react'
import { FC }                from 'react'
import { useIntl }           from 'react-intl'

import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Text }              from '@ui/text'
import { ImageBlock }        from '@ui/image'

import { Navigation }        from './navigation'
import { Social }            from './social'
import { ContentRender }     from './content-render'
import { ContainerRelative } from './container-relative'
import messages              from './messages'

const Header: FC = () => {
  const intl = useIntl()

  const textDesktop = [messages.instructor, messages.instructorName, messages.whatsUp]
  const textMobileTop = [messages.instructor, messages.instructorNameMobile]
  const textMobileBottom = [
    messages.drum,
    messages.rythmMobile,
    messages.instructorAbout,
    messages.reviews,
  ]
  const phoneNumber = '+7-926-246-47-59'

  return (
    <Box
      width={['320px', '320px', '100%']}
      height={['345px', '345px', '285px']}
      justifyContent='center'
    >
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Layout flexBasis={20} flexShrink={0} />
        <Layout width='214px' height='216px' flexShrink={0}>
          <ImageBlock />
        </Layout>
        <Layout flexBasis={22} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={60} flexShrink={0} />
          <Layout width='450px'>
            <ContentRender array={textDesktop} />
          </Layout>
          <Layout flexBasis={18} />
          <Box width='300px' overflow='visible' zIndex={2}>
            <Navigation />
          </Box>
          <Layout flexBasis={60} flexShrink={0} />
        </Column>
        <ContainerRelative height='285px'>
          <Layout width='375px'>
            <Column width='100%'>
              <Layout flexBasis={102} />
              <Social />
            </Column>
          </Layout>
        </ContainerRelative>
        <Layout flexBasis={120} flexShrink={0} />
      </Layout>
      <Row display={['flex', 'flex', 'none']} justifyContent='center'>
        <Box width='320px' style={{ position: 'relative' }}>
          <ContainerRelative height={['355px', '355px', '285px']}>
            <Layout
              justifyContent='center'
              width='320px'
              overflow='visible'
              style={{ zIndex: 1 }}
              flexShrink={0}
            >
              <Column width='100%' alignItems='center'>
                <Layout flexBasis={30} />
                <Layout>
                  <ContentRender array={textMobileTop} />
                </Layout>
                <Layout>
                  <Text
                    whiteSpace='nowrap'
                    color='dullBlack'
                    fontSize='small'
                    fontWeight='bold'
                    lineHeight='semiSmall'
                    letterSpacing='0.15em'
                  >
                    {phoneNumber}
                  </Text>
                </Layout>
                <Layout flexBasis={14} />
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
                        letterSpacing='0.15em'
                      >
                        {intl.formatMessage(item)}
                      </Text>
                    </Layout>
                    <Layout flexBasis={14} flexShrink={0} />
                  </>
                ))}
              </Column>
            </Layout>
          </ContainerRelative>
        </Box>
      </Row>
    </Box>
  )
}

export { Header }
