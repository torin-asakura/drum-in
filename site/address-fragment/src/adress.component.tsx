import React      from 'react'

import { Row }    from '@ui/layout'
import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'

const Adress = () => (
  <>
    <Row style={{ border: '1px solid black' }} display={['none', 'none', 'flex']}>
      <Box width='720px' height='255px' border='1px solid black'>
        <Row style={{ border: '1px solid black' }}>
          <Layout flexBasis={138} />
          <Column width='100%' style={{ border: '1px solid black' }}>
            <Layout flexBasis={52} />
            <Layout style={{ border: '1px solid black' }}>address</Layout>
            <Layout flexBasis={60} />
            <Layout style={{ border: '1px solid black' }}>text</Layout>
            <Layout flexBasis={52} />
          </Column>
          <Layout flexBasis={119} />
        </Row>
      </Box>
      <Layout width='720px' height='255px' style={{ border: '1px solid black' }}>
        yandex map
      </Layout>
    </Row>
    <Layout display={['flex', 'flex', 'none']} width='320px'>
      <Column width='100%'>
        <Box border='1px solid black' width='320' height='160px'>
          <Row style={{ border: '1px solid black' }}>
            <Layout flexBasis={40} />
            <Column width='100%' style={{ border: '1px solid black' }}>
              <Layout flexBasis={25} />
              <Layout style={{ border: '1px solid black' }}>address header</Layout>
              <Layout flexBasis={25} />
              <Layout style={{ border: '1px solid black' }}>address</Layout>
              <Layout flexBasis={25} />
            </Column>
            <Layout flexBasis={20} />
          </Row>
        </Box>
        <Layout style={{ border: '1px solid black' }}>yandex map</Layout>
      </Column>
    </Layout>
  </>
)

export { Adress }
