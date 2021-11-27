import React                        from 'react'

import { Column }                   from '@ui/layout'
import { HeaderMobile }             from '@site/header-fragment'
import { IndividualLessonsMobile }  from '@site/individual-lessons-fragment'
import { SkillsPresentationMobile } from '@site/skills-presentation-fragment'
import { CourseDescriptionMobile }  from '@site/course-description-fragment'
import { SkillsToLearnMobile }      from '@site/skills-to-learn-fragment'
import { AskQuestion }              from '@site/ask-a-question-fragment'
import { AboutMobile }              from '@site/about-fragment'
import { ReviewsMobile }            from '@site/reviews-fragment'
import { FooterMobile }             from '@site/footer-fragment'

const Mobile = () => {
  return(
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
  )

}
export { Mobile }
