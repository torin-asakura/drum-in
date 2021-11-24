import React from 'react'

import {Header} from '@site/header-fragment'
import { GlobalStyles } from '@ui/theme'
import {Row} from '@ui/layout'


const IndexPage = () => {
  return (
    <Row justifyContent='center'>
    <GlobalStyles/>
      <Header/>
      </Row>
  )
}

export default IndexPage
