import { IndividualCourseQuery } from '../../__generated__/graphql'

export type IndividualCourseDataType = IndividualCourseQuery['individualCourse']
export type IndividualCourseBackgroundType =
  | {
      desktop?: {
        footer?: {
          node: { sourceUrl?: string | null }
        } | null
        hero?: {
          node: { sourceUrl?: string | null }
        } | null
        teacher?: {
          node: { sourceUrl?: string | null }
        } | null
      } | null
      courseProgram?: { node: { sourceUrl?: string | null } } | null

      mobile?: {
        footer?: {
          node: { sourceUrl?: string | null }
        } | null
        hero?: {
          node: { sourceUrl?: string | null }
        } | null
        teacher?: {
          node: { sourceUrl?: string | null }
        } | null
      } | null
    }
  | null
  | undefined
