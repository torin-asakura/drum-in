export type GalleryDataProps = Array<{
  __typename?: 'TeacherGallery'
  alt?: string | null
  image?: {
    __typename?: 'AcfMediaItemConnectionEdge'
    node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
  } | null
} | null>

export type TeacherDataProps = {
  __typename?: 'Teacher'
  title?: string | null
  description?: string | null
  subtitle?: string | null
  gallery?: GalleryDataProps | null
  statistics?: Array<{
    __typename?: 'TeacherStatistics'
    text?: string | null
    number?: number | null
  } | null> | null
  education?: {
    __typename?: 'TeacherEducation'
    title?: string | null
    list?: Array<{ __typename?: 'TeacherEducationList'; element?: string | null } | null> | null
  } | null
}
