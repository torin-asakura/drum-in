import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

const Education: FC = () => (
  <Box width={['320px', '320px', '1440px']} border='1px solid black'>
    <Column width='100%' display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
      <Layout flexBasis={60} flexShrink={0} />
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={138} flexShrink={0} />
        <Column width='100%' style={{ border: '1px solid black' }}>
          <Layout style={{ border: '1px solid black' }}>text</Layout>
          <Layout flexBasis={50} />
          <Layout style={{ border: '1px solid black' }}>text</Layout>
        </Column>
        <Layout flexBasis={118} flexShrink={0} />
        <Layout style={{ border: '1px solid black' }} width='538px' height='364px'>
          img
        </Layout>
        <Layout flexBasis={74} flexShrink={0} />
      </Row>
      <Layout flexBasis={65} />
    </Column>
    <Column
      width='100%'
      display={['flex', 'flex', 'none']}
      alignItems='center'
      style={{ border: '1px solid black' }}
    >
      <Layout flexBasis={25} flexShrink={0} />
      <Row>
        <Layout flexBasis={44} flexShrink={0} />
        <Column width='100%' style={{ border: '1px solid black' }}>
          <Layout style={{ border: '1px solid black' }}>header text</Layout>
          <Layout flexBasis={12} />
          <Layout style={{ border: '1px solid black' }}>main text</Layout>
          <Layout flexBasis={20} />
        </Column>
        <Layout flexBasis={44} flexShrink={0} />
      </Row>
      <Layout style={{ border: '1px solid black' }}>img</Layout>
      <Layout flexBasis={30} />
      <Row justifyContent='center' style={{ border: '1px solid black' }}>
        <Layout flexBasis={44} flexShrink={0} />
        <Layout style={{ border: '1px solid black' }}>text</Layout>
        <Layout flexBasis={44} flexShrink={0} />
      </Row>
      <Layout flexBasis={15} />
      <Layout style={{ border: '1px solid black' }}>link text</Layout>
      <Layout flexBasis={25} flexShrink={0} />
    </Column>
  </Box>
)

export { Education }
