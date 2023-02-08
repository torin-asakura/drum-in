import React                      from 'react'
import { FC }                     from 'react'

import { ProgramHorizontalBlock } from '@landing/program-horizontal-fragment'
import { AdvantagesBlock }     from '@landing/advantages-fragment'
import { AfterTheCourseBlock } from '@landing/after-the-course-fragment'
import { BannerCourseBlock }   from '@landing/banner-course-fragment'
import { BannerWithTagsBlock } from '@landing/banner-with-tags-fragment'
import { SkillsBlock }         from '@landing/skills-fragment'
import { TargetAudienceBlock } from '@landing/target-audience-fragment'

import { ContentProps }           from './content.interfaces'

const Content: FC<ContentProps> = ({ id }) => {
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

  if (id === 'Advantages')
    return (
      <>
        <BannerWithTagsBlock />
        <AdvantagesBlock />
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

export { Content }
