import React                        from 'react'

import { Header }                   from '@site/header-fragment'
import { GlobalStyles }             from '@ui/theme'
import { Row }                      from '@ui/layout'
import { CourseDescription }        from '@site/course-description-fragment'
import { Column }                   from '@ui/layout'
import { SkillsToLearn }            from '@site/skills-to-learn-fragment'
import { IndividualLessons }        from '@site/individual-lessons-fragment'
import { SkillsPresentation }       from '@site/skills-presentation-fragment'
import { About }                    from '@site/about-fragment'
import { Education }                from '@site/education-fragment'
import { Portfolio }                from '@site/portfolio-fragment'
import { Reviews }                  from '@site/reviews-fragment'
import { Footer }                   from '@site/footer-fragment'
import { HeaderMobile }             from '@site/header-fragment'
import { IndividualLessonsMobile }  from '@site/individual-lessons-fragment'
import { SkillsPresentationMobile } from '@site/skills-presentation-fragment'
import { CourseDescriptionMobile }  from '@site/course-description-fragment'
import { SkillsToLearnMobile }      from '@site/skills-to-learn-fragment'
import { AskQuestion }              from '@site/ask-a-question-fragment'
import { AboutMobile }              from '@site/about-fragment'
import { ReviewsMobile }            from '@site/reviews-fragment'
import { FooterMobile }             from '@site/footer-fragment'

const IndexPage = () => {
  return (
    <Row justifyContent='center'>
      <GlobalStyles />
      <Column width='100%' alignItems='center'>
        <HeaderMobile />
        <IndividualLessonsMobile />
        <SkillsPresentationMobile />
        <CourseDescriptionMobile />
        <SkillsToLearnMobile />
        <AskQuestion />
        <AboutMobile />
        <ReviewsMobile />
        <FooterMobile />
      </Column>
    </Row>
  )
}

export default IndexPage
