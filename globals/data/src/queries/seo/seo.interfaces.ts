export type SeoDataProps = {
  ogLocale: 'ru_RU'
  twitterCard: 'summary_large_image'
  __typename?: 'PostTypeSEO'
  metaDesc?: string | null
  focuskw?: string | null
  opengraphType?: string | null
  opengraphTitle?: string | null
  opengraphDescription?: string | null
  opengraphUrl?: string | null
  opengraphSiteName?: string | null
  opengraphModifiedTime?: string | null
  twitterDescription?: string | null
  twitterTitle?: string | null
  title?: string | null
  opengraphImage?: {
    __typename?: 'MediaItem'
    mediaDetails?: {
      __typename?: 'MediaDetails'
      sizes?: Array<{
        __typename?: 'MediaSize'
        height?: string | null
        width?: string | null
        name?: string | null
        sourceUrl?: string | null
      } | null> | null
    } | null
  } | null
  twitterImage?: { __typename?: 'MediaItem'; sourceUrl?: string | null } | null
  breadcrumbs?: Array<{
    __typename?: 'SEOPostTypeBreadcrumbs'
    text?: string | null
    url?: string | null
  } | null> | null
} | null
