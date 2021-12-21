import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { ImageBlock }  from '@ui/image'

import { Navigation }  from './navigation'
import { Social }      from './social'
import { DesktopText } from './desktop-text'
import { MobileText }  from './mobile-text'

import { Container }   from './container'

const Header: FC = () => (
  <Box
    width={['320px', '320px', '100%']}
    height={['345px', '345px', '285px']}
    justifyContent='center'
  >
    <Layout width='1440px' display={['none', 'none', 'flex']}>
      <Layout width='214px' height='216px' flexShrink={0}>
        <ImageBlock />
      </Layout>
      <Layout flexBasis={22} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={60} flexShrink={0} />
        <Row>
          <DesktopText />
        </Row>
        <Layout flexBasis={18} />
        <Layout width='300px' overflow='visible' style={{ zIndex: 1 }}>
          <Navigation />
        </Layout>
        <Layout flexBasis={60} flexShrink={0} />
      </Column>
      <Row style={{ position: 'relative' }}>
        <Container height='285px'>
          <Layout width='350px'>
            <Column width='100%'>
              <Layout flexBasis={102} />
              <Social />
            </Column>
          </Layout>
        </Container>
      </Row>
      <Layout flexBasis={120} flexShrink={0} />
    </Layout>
    <Row display={['flex', 'flex', 'none']} justifyContent='center'>
      <Layout width='320px' style={{ position: 'relative' }}>
        <Container height={['355px', '355px', '285px']}>
          <MobileText />
        </Container>
      </Layout>
    </Row>
  </Box>
)

export { Header }
