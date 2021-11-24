import React                 from 'react'

import { Header }            from '@site/header-fragment'
import { GlobalStyles }      from '@ui/theme'
import { Row }               from '@ui/layout'
import { CourseDescription } from '@site/course-description-fragment'
import { Column }            from '../../../ui/layout/src/column.component'

const IndexPage = () => {
  return (
    <Row justifyContent='center'>
      <GlobalStyles />
      <Column width='100%' alignItems = 'center'>
        <Header />
        <CourseDescription />
      </Column>
    </Row>
  )
}

export default IndexPage
