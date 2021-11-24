import React                 from 'react'

import { Header }            from '@site/header-fragment'
import { GlobalStyles }      from '@ui/theme'
import { Row }               from '@ui/layout'
import { CourseDescription } from '@site/course-description-fragment'
import { Column }            from '@ui/layout'
import { SkillsToLearn }     from '../../skills-to-learn-fragment/src'

const IndexPage = () => {
  return (
    <Row justifyContent='center'>
      <GlobalStyles />
      <Column width='100%' alignItems='center'>
        <Header />
        <CourseDescription />
        <SkillsToLearn />
      </Column>
    </Row>
  )
}

export default IndexPage
