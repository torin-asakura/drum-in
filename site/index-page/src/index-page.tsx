import React       from 'react'

import { Row }     from '@ui/layout'
import { Layout }  from '@ui/layout'

import { Desktop } from './desktop.component'

const IndexPage = () => {
  return (
    <Row justifyContent='center'>
      <Layout width={['320px', '320px', '1440px']}>
        <Desktop />
      </Layout>
    </Row>
  )
}

export default IndexPage
