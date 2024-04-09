export type ProcessEducationDataProps = {
  __typename?: 'LearningProcess'
  title?: string | null
  content?: Array<{
    __typename?: 'LearningProcessContent'
    title?: string | null
    text?: string | null
    picture?: {
      __typename?: 'LearningProcessContentPicture'
      alt?: string | null
      image?: {
        __typename?: 'AcfMediaItemConnectionEdge'
        node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
      } | null
    } | null
  } | null> | null
} | null
