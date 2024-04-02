import { MainCourseDataProps }       from '../header'
import { IndividualCourseDataProps } from '../header'

export type HeroDataProps = {
  title?: string | null
  subtitle?: string | null
  scrollButton?: string | null
  about?: string | null
  benefits?: Array<{ benefit?: string | null } | null> | null
}

export type RunningLineDataProps = Array<{ text?: string | null } | null> | null

export type ChooseCourseDataProps = {
  title?: string | null
  courses?: Array<{
    description?: string | null
    course?: {
      nodes: Array<MainCourseDataProps | IndividualCourseDataProps>
    } | null
  } | null> | null
}

export type IndividualLessonDataProps = {
  title?: string | null
  cta?: {
    button?: string | null
    description?: string | null
    price?: string | null
    title?: string | null
  } | null
  details?: Array<{
    description?: string | null
    title?: string | null
  } | null> | null
}

export type SliderDataProps = {
  title?: string | null
  upperslider?: Array<{
    text?: string | null
    image?: {
      node: { sourceUrl?: string | null }
    } | null
  } | null> | null
  lowerslider?: Array<{
    text?: string | null
    image?: {
      node: { sourceUrl?: string | null }
    } | null
  } | null> | null
}

export type StudentsDataProps = {
  title?: string | null
  description?: string | null
  cta?: string | null
  cards?: Array<{
    firstBadge?: string | null
    secondBadge?: string | null
    title?: string | null
    description?: string | null
    leftIcon?: {
      node: { sourceUrl?: string | null }
    } | null
    rightIcon?: { node: { sourceUrl?: string | null } } | null
  } | null> | null
}

export interface MainPageDataProps {
  hero?: HeroDataProps | null
  runningline?: RunningLineDataProps
  chooseCourse?: ChooseCourseDataProps | null
  individualLesson?: IndividualLessonDataProps | null
  slider?: SliderDataProps | null
  students?: StudentsDataProps | null
}

export interface MainPageBackgroundProps {
  desktop?: {
    footer?: { node: { sourceUrl?: string | null } } | null
    hero?: { node: { sourceUrl?: string | null } } | null
    teacher?: { node: { sourceUrl?: string | null } } | null
  } | null
  mobile?: {
    footer?: { node: { sourceUrl?: string | null } } | null
    hero?: {
      node: { sourceUrl?: string | null }
    } | null
    teacher?: {
      node: { sourceUrl?: string | null }
    } | null
  } | null
}
