import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'

const SliderComponent = ({ width, height, marginY }) => {
  //TODO slider control logic
  return (
    <Column width='100%'>
      <Box width={width} height={height} border='1px solid black'>
        <Layout>img</Layout>
      </Box>
      <Layout flexBasis={marginY} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout width='26px' height='10px'>
          <Box width='3px' height='3px' borderRadius={50} border='1px solid black' />
          <Layout flexBasis={10} />
          <Box width='3px' height='3px' borderRadius={50} border='1px solid black' />
        </Layout>
      </Row>
    </Column>
  )
}

export { SliderComponent }
