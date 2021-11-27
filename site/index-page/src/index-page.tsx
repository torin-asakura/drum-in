import React            from 'react'

import { GlobalStyles } from '@ui/theme'
import { Row }          from '@ui/layout'
import { Layout }       from '@ui/layout'

import { Desktop }      from './desktop.component'
import { Mobile }       from './mobile.component'

const IndexPage = () => {
  return (
    <Row justifyContent='center'>
      <GlobalStyles />
      <Desktop />
    </Row>
  )
}

export default IndexPage
