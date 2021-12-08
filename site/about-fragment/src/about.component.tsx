import React      from 'react'

import { Row }    from '@ui/layout'
import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'

const About = () => (
  <Box width={['320px', '320px', '1440px']} border='1px solid black'>
    <Row display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
      <Layout flexBasis={138} flexShrink={0} />
      <Column width='100%' style={{ border: '1px solid black' }}>
        <Layout flexBasis={50} />
        <Layout style={{ border: '1px solid black' }}>text</Layout>
        <Layout flexBasis={50} />
        <Layout style={{ border: '1px solid black' }}>text</Layout>
        <Layout flexBasis={50} />
      </Column>
      <Layout flexBasis={115} flexShrink={0} />
      <Column>
        <Layout flexBasis={64} />
        <Layout width='530px' height='311px' style={{ border: '1px solid black' }}>
          img
        </Layout>
        <Layout flexBasis={64} />
      </Column>
      <Layout flexBasis={74} flexShrink={0} />
    </Row>
    <Column width='100%' display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
      <Layout flexBasis={25} flexShrink={0} />
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={44} flexShrink={0} />
        <Column width='100%' style={{ border: '1px solid black' }}>
          <Layout style={{ border: '1px solid black' }}>header text</Layout>
          <Layout flexBasis={12} />
          <Layout style={{ border: '1px solid black' }}>main text</Layout>
        </Column>
        <Layout flexBasis={44} flexShrink={0} />
      </Row>
      <Layout flexBasis={25} flexShrink={0} />
    </Column>
  </Box>
)

export { About }
