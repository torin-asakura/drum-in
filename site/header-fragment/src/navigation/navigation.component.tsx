import React      from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/layout'

const Navigation = () => {
  return (
    <Box width='1015px' zIndex={10} position='absolute' top='200px' flexShrink={0}>
      <Row>
        <Layout flexBasis={11} />
        <Layout>
          <Text> открытие ритма </Text>
        </Layout>
        <Layout flexBasis={130} />
        <Layout>
          <Text>ударная установка</Text>
        </Layout>
        <Layout flexBasis={130} />
        <Layout>
          <Text>о преподавателе</Text>
        </Layout>
        <Layout flexBasis={130} />
        <Layout>
          <Text>отзывы</Text>
        </Layout>
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
