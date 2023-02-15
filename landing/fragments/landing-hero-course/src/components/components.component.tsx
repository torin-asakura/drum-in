import React                      from 'react'
import { FC }                     from 'react'

import { AfterTheCourseBlock }    from '@landing/after-the-course-fragment'
import { BannerCourseBlock }      from '@landing/banner-course-fragment'
import { ProgramHorizontalBlock } from '@landing/program-horizontal-fragment'
import { SkillsBlock }            from '@landing/skills-fragment'
import { TargetAudienceBlock }    from '@landing/target-audience-fragment'

import { ComponentsProps }        from './components.interfaces'

const Components: FC<ComponentsProps> = ({ id }) => {
  if (id === 'AfterTheCourse')
    return (
      <>
        <BannerCourseBlock />
        <AfterTheCourseBlock />
        <SkillsBlock />
      </>
    )

  if (id === 'TargetAudience')
    return (
      <>
        <BannerCourseBlock />
        <TargetAudienceBlock />
        <ProgramHorizontalBlock />
      </>
    )

  return (
    <>
      <BannerCourseBlock />
      <AfterTheCourseBlock />
      <SkillsBlock />
    </>
  )
}

export { Components }
