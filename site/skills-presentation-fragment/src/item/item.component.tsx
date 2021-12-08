import React      from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'

const Item = ({ item }) => (
  <>
    <Row justifyContent='center' alignItems='center' display={['none', 'none', 'flex']}>
      <Layout width='68px' height='58px' style={{ border: '1px solid black' }}>
        img
      </Layout>
      <Layout flexBasis={36} />
      <Layout width='320px' height='25px' style={{ border: '1px solid black' }}>
        {item}
      </Layout>
    </Row>
    <Column justifyContent='center' alignItems='center' display={['flex', 'flex', 'none']}>
      <Layout width='68px' height='58px' style={{ border: '1px solid black' }}>
        img
      </Layout>
      <Layout flexBasis={18} />
      <Layout
        width={['180px', '180px', '320px']}
        height='25px'
        style={{ border: '1px solid black' }}
      >
        {item}
      </Layout>
    </Column>
  </>
)

export { Item }
