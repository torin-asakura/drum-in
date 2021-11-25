import React      from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/layout'

const Education = () => {
  return (
    <Box width='1440px' height='490px' border='1px solid black'>
      <Column width='100%'>
        <Layout flexBasis={60} flexShrink={0} />
        <Row>
          <Layout flexBasis={138} flexShrink={0} />
          <Column width='100%'>
            <Box width='572px' height='18px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={50} />
            <Box width='572px' height='300px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
          </Column>
          <Layout flexBasis={118} flexShrink={0} />
          <Box width={536} height={364} border='1px solid black' flexShrink={0}>
            <Layout>img</Layout>
          </Box>
          <Layout flexBasis={74} flexShrink={0} />
        </Row>
        <Layout flexBasis={65} />
      </Column>
    </Box>
  )
}

export { Education }
