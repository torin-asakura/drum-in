import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { ImageBlock }      from '@ui/image'

import { Navigation }      from './navigation'
import { Social }          from './social'
import { DesktopText }     from './desktop-text'
import { MobileText }      from './mobile-text'
import { BackgroundField } from '@ui/background-field'

const Header: FC = () => (
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
            <DesktopText />
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
        <MobileText />
    </Row>
  </Box>
)

export { Header }
