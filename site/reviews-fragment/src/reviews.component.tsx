import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

const Reviews: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['240px', '240px', '430px']}
    border='1px solid black'
  >
    <Layout flexBasis={138} flexShrink={0} display={['none', 'none', 'flex']} />
    <Column width='100%' display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
      <Layout style={{ border: '1px solid black' }}>text</Layout>
      <Layout flexBasis={56} flexShrink={0} />
      <Row style={{ border: '1px solid black' }}>
        <Layout width='527px' height='284px' style={{ border: '1px solid black' }}>
          yotube player
        </Layout>
        <Layout flexBasis={92} flexShrink={0} />
        <Layout width='527px' height='284px' style={{ border: '1px solid black' }}>
          yotube player
        </Layout>
      </Row>
      <Layout flexBasis={64} />
    </Column>
    <Layout flexBasis={156} flexShrink={0} display={['none', 'none', 'flex']} />
    <Row display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
      <Layout flexBasis={10} />
      <Column width='100%' style={{ border: '1px solid black' }}>
        <Layout flexBasis={15} />
        <Layout style={{ border: '1px solid black' }}>reviews</Layout>
        <Layout flexBasis={15} />
        <Layout width={300} height={160} style={{ border: '1px solid black' }}>
          youtube player
        </Layout>
        <Layout flexBasis={15} />
      </Column>
      <Layout flexBasis={10} />
    </Row>
  </Box>
)

export { Reviews }
