import React                  from 'react'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Header }             from '@site/header-fragment'
import { CourseDescription }  from '@site/course-description-fragment'
import { SkillsToLearn }      from '@site/skills-to-learn-fragment'
import { IndividualLessons }  from '@site/individual-lessons-fragment'
import { SkillsPresentation } from '@site/skills-presentation-fragment'
import { About }              from '@site/about-fragment'
import { Education }          from '@site/education-fragment'
import { Portfolio }          from '@site/portfolio-fragment'
import { Reviews }            from '@site/reviews-fragment'
import { Footer }             from '@site/footer-fragment'

const IndexPage = () => (
  <Row justifyContent='center'>
    <Layout width={['320px', '320px', '1440px']}>
      <Column width='100%' alignItems='center'>
        <Header />
        <CourseDescription />
        <SkillsToLearn />
        <IndividualLessons />
        <SkillsPresentation />
        <About />
        <Education />
        <Portfolio />
        <Reviews />
        <Footer />
      </Column>
    </Layout>
  </Row>
)

export default IndexPage
