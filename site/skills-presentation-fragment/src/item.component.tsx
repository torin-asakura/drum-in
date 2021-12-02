import React      from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

const Item = ({ item }) => (
  <Row style={{ border: '1px solid black' }}>
    <Layout style={{ border: '1px solid black' }}>img</Layout>
    <Layout flexBasis={36} />
    <Layout style={{ border: '1px solid black' }}>{item}</Layout>
  </Row>
)

export { Item }
