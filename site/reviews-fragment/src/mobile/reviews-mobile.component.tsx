import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text }   from '@ui/layout'
import { Row }    from '@ui/layout'

const ReviewsMobile = () => {
  //TODO change slider to control more slides
  return (
    <Box width='320px' height='230px' border='1px solid black'>
      <Layout flexBasis={10} />
      <Column>
        <Layout flexBasis={15} flexShrink={0} />
        <Box width='63px' height='25px' border='1px solid black'>
          <Layout>
            <Text>Reviews</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} flexShrink={0} />
        <Box width='300px' height='162px' border='1px solid black'>
          <Layout>youtube container</Layout>
        </Box>
        <Layout flexBasis={10} />
        <Row justifyContent='center'>
          <Layout width='26px' height='10px'>
            <Box width='3px' height='3px' borderRadius={50} border='1px solid black' />
            <Layout flexBasis={10} />
            <Box width='3px' height='3px' borderRadius={50} border='1px solid black' />
            <Layout flexBasis={10} />
            <Box width='3px' height='3px' borderRadius={50} border='1px solid black' />
          </Layout>
        </Row>
      </Column>
      <Layout flexBasis={10} />
    </Box>
  )
}

export { ReviewsMobile }
