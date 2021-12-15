import React          from 'react'
import { FC }         from 'react'

import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { ImageBlock } from '@ui/image'

const Social: FC = () => (
  <Row>
    <Layout flexBasis={80} />
    <Layout width='18px' height='18px'>
      <ImageBlock />
    </Layout>
    <Layout flexBasis={50} />
    <Layout width='18px' height='18px'>
      <ImageBlock />
    </Layout>
    <Layout flexBasis={50} />
    <Layout width='18px' height='18px'>
      <ImageBlock />
    </Layout>
    <Layout flexBasis={50} />
    <Layout width='18px' height='18px'>
      <ImageBlock />
    </Layout>
    <Layout flexBasis={80} />
  </Row>
)

export { Social }
