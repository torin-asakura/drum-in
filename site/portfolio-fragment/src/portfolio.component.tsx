import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

const Portfolio: FC = () => (
  <Box width='1440px' height='1100px' border='1px solid black' display={['none', 'none', 'flex']}>
    <Column width='100%' style={{ border: '1px solid black' }}>
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={65} flexShrink={0} />
        <Column alignItems='center' style={{ border: '1px solid black' }}>
          <Layout flexBasis={70} />
          <Layout width='355px' height='64px' style={{ border: '1px solid black' }} />
          <Layout style={{ border: '1px solid black' }}>img</Layout>
          <Layout width='355px' height='74px' style={{ border: '1px solid black' }} />
          <Layout style={{ border: '1px solid black' }}>img</Layout>
          <Box width='355px' height='45px' border='1px solid black' />
        </Column>
        <Layout flexBasis={160} />
        <Column style={{ border: '1px solid black' }}>
          <Layout flexBasis='126px' />
          <Layout style={{ border: '1px solid black' }}>
            <Text>text</Text>
          </Layout>
          <Layout flexBasis={82} />
        </Column>
        <Layout flexBasis={143} flexShrink={0} />
      </Row>
      <Layout flexBasis={60} />
    </Column>
  </Box>
)

export { Portfolio }
