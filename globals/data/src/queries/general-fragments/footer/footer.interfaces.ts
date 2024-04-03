export type ElementDataProps =
  | {
      __typename?: 'Course'
      title?: string | null
      content?: { __typename?: 'Content'; path?: string | null } | null
    }
  | { __typename?: 'GeneralFragment' }
  | {
      __typename?: 'IndividualCourse'
      title?: string | null
      individualCourseData?: {
        __typename?: 'IndividualCourseData'
        path?: string | null
      } | null
    }
  | { __typename?: 'MediaItem' }
  | { __typename?: 'Page' }
  | { __typename?: 'Post' }

export type FooterDataProps = {
  __typename?: 'Footer'
  email?: string | null
  logo?: {
    __typename?: 'AcfMediaItemConnectionEdge'
    node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
  } | null
  privacyPolicy?: {
    __typename?: 'FooterPrivacyPolicy'
    title?: string | null
    path?: string | null
  } | null
  courses?: {
    __typename?: 'AcfContentNodeConnection'
    nodes: Array<ElementDataProps>
  } | null
  socials?: Array<{
    __typename?: 'FooterSocials'
    title?: string | null
    link?: string | null
  } | null> | null
} | null
