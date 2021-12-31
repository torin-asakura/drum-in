import React                 from 'react'
import { FC }                from 'react'
import { useIntl }           from 'react-intl'

import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Text }              from '@ui/text'
import { ImageBlock }        from '@ui/image'

import { useLogo }           from './data'
import { useTraits }         from './data'
import { useNavlinks }       from './data'
import { useSocials }        from './data'
import { Navigation }        from './navigation'
import { Social }            from './social'
import { ContentRender }     from './content-render'
import { ContainerRelative } from './container-relative'

const Header: FC = () => {
  const logo = useLogo()
  const traits = useTraits()
  const navlinks = useNavlinks()

  return (
    <Box
      width={['320px', '320px', '100%']}
      height={['345px', '345px', '285px']}
      justifyContent='center'
    >
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Layout flexBasis={20} flexShrink={0} />
        <Layout width='214px' height='216px' flexShrink={0}>
          <ImageBlock src={logo.url} alt={logo.alt} />
        </Layout>
        <Layout flexBasis={22} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={60} flexShrink={0} />
          <Layout width='450px'>
            <ContentRender array={traits} />
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
                  <ContentRender array={traits} />
                </Layout>
                <Layout flexBasis={14} />
                <Layout width='80px' height='80px'>
                  <ImageBlock src={logo.url} alt={logo.alt} />
                </Layout>
                <Layout flexBasis={14} />
                {navlinks.map((item) => (
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
                        {item?.title}
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
