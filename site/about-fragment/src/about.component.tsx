import React      from 'react'

import { Row }    from '@ui/layout'
import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/layout'
import { Column } from '@ui/layout'

const About = () => {
  return (
    <Box width='1440px' border='1px solid black'>
      <Row>
        <Layout flexBasis={138} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={56} />
          <Box width='575px' height='21px' border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
          <Layout flexBasis={50} />
          <Box width='575px' height='250px' border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
        </Column>
        <Layout flexBasis={115} flexShrink={0} />
        <Column>
          <Layout flexBasis={64} />
          <Box width='536px' height='311px' border='1px solid black'>
            <Layout>img</Layout>
          </Box>
          <Layout flexBasis={64} />
        </Column>
        <Layout flexBasis={74} flexShrink={0} />
      </Row>
    </Box>
  )
}

export { About }
