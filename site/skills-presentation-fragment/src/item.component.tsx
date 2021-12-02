import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

const Item = ({ item }) => (
  <Row>
    <Box width='68px' height='58px' border='1px solid black'>
      <Layout>img</Layout>
    </Box>
    <Layout flexBasis={36} />
    <Box width='320px' height='25px' border='1px solid black'>
      <Layout>{item}</Layout>
    </Box>
  </Row>
)

export { Item }
