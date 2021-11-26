import React                       from 'react'

import { Header }                  from '@site/header-fragment'
import { GlobalStyles }            from '@ui/theme'
import { Row }                     from '@ui/layout'
import { CourseDescription }       from '@site/course-description-fragment'
import { Column }                  from '@ui/layout'
import { SkillsToLearn }           from '@site/skills-to-learn-fragment'
import { IndividualLessons }       from '@site/individual-lessons-fragment'
import { SkillsPresentation }      from '@site/skills-presentation-fragment'
import { About }                   from '@site/about-fragment'
import { Education }               from '@site/education-fragment'
import { Portfolio }               from '@site/portfolio-fragment'
import { Reviews }                 from '@site/reviews-fragment'
import { Footer }                  from '@site/footer-fragment'
import { HeaderMobile }            from '@site/header-fragment'
import { IndividualLessonsMobile } from '@site/individual-lessons-fragment'
import { SkillsPresentationMobile } from '@site/skills-presentation-fragment'

const IndexPage = () => {
  return (
    <Row justifyContent='center'>
      <GlobalStyles />
      <Column width='100%' alignItems='center'>
        <HeaderMobile />
        <IndividualLessonsMobile />
        <SkillsPresentationMobile/>
      </Column>
    </Row>
  )
}

export default IndexPage
