import React      from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const Navigation = () => (
  <Box
    width='1015px'
    zIndex={10}
    position='absolute'
    top='200px'
    flexShrink={0}
    display={['none', 'none', 'flex']}
  >
    <Row style={{ border: '1px solid black' }}>
      <Layout flexBasis={11} />
      <Layout style={{ border: '1px solid black' }}>
        <Text> открытие ритма </Text>
      </Layout>
      <Layout flexBasis={130} />
      <Layout style={{ border: '1px solid black' }}>
        <Text>ударная установка</Text>
      </Layout>
      <Layout flexBasis={130} />
      <Layout style={{ border: '1px solid black' }}>
        <Text>о преподавателе</Text>
      </Layout>
      <Layout flexBasis={130} />
      <Layout style={{ border: '1px solid black' }}>
        <Text>отзывы</Text>
      </Layout>
      <Layout flexBasis={11} />
    </Row>
  </Box>
)

export { Navigation }
