import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'

const Footer: FC = () => (
  <Layout width={['320px', '320px', '1440px']} height={['730px', '730px', '570px']}>
    <Box width='1440px' height='252px' border='1px solid black' display={['none', 'none', 'flex']}>
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis='138px' flexShrink={0} />
        <Column style={{ border: '1px solid black' }}>
          <Layout flexBasis={60} />
          <Layout style={{ border: '1px solid black' }}>text</Layout>
          <Layout flexBasis={56} />
          <Row style={{ border: '1px solid black' }}>
            <Layout style={{ border: '1px solid black' }}>icon</Layout>
            <Layout flexBasis={103} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>icon</Layout>
            <Layout flexBasis={103} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>icon</Layout>
            <Layout flexBasis={103} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>icon</Layout>
          </Row>
        </Column>
        <Layout flexBasis='800px' flexShrink={0} />
      </Row>
    </Box>
    <Box width='320px' height='400px' border='1px solid black' display={['flex', 'flex', 'none']}>
      <Layout flexBasis={30} />
      <Column width='100%' alignItems='center' style={{ border: '1px solid black' }}>
        <Layout flexBasis={30} />
        <Layout style={{ border: '1px solid black' }}>sign up</Layout>
        <Layout flexBasis={30} />
        <Layout style={{ border: '1px solid black' }}>phone number</Layout>
        <Layout flexBasis={50} />
        <Row justifyContent='center' style={{ border: '1px solid black' }}>
          <Layout style={{ border: '1px solid black' }}>icon</Layout>
          <Layout flexBasis={100} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>icon</Layout>
        </Row>
        <Layout flexBasis={100} flexShrink={0} />
        <Row justifyContent='center' style={{ border: '1px solid black' }}>
          <Layout style={{ border: '1px solid black' }}>icon</Layout>
          <Layout flexBasis={100} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>icon</Layout>
        </Row>
      </Column>
      <Layout flexBasis={30} />
    </Box>
  </Layout>
)

export { Footer }
