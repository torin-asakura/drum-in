import React      from 'react'

import { Row }    from '@ui/layout'
import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Column } from '@ui/layout'

const About = () => (
  <Box width={['320px', '320px', '1440px']} border='1px solid black'>
    <Row display={['none', 'none', 'flex']}>
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
    <Column width='100%' display={['flex', 'flex', 'none']}>
      <Layout flexBasis={25} flexShrink={0} />
      <Row>
        <Layout flexBasis={44} flexShrink={0} />
        <Column width='100%'>
          <Box border='1px solid black'>
            <Layout>
              <Text>header text</Text>
            </Layout>
          </Box>
          <Layout flexBasis={12} />
          <Box border='1px solid black'>
            <Layout>
              <Text>main text</Text>
            </Layout>
          </Box>
        </Column>
        <Layout flexBasis={44} flexShrink={0} />
      </Row>
      <Layout flexBasis={25} flexShrink={0} />
    </Column>
  </Box>
)

export { About }
