export type SeoDataProps = {
  ogLocale: string
  twitterCard: string
  lightThemeIcon: string
  darkThemeIcon: string
  appleIcon: string
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
    mediaItemUrl?: string | null
  } | null
  twitterImage?: { __typename?: 'MediaItem'; sourceUrl?: string | null } | null
  breadcrumbs?: Array<{
    __typename?: 'SEOPostTypeBreadcrumbs'
    text?: string | null
    url?: string | null
  } | null> | null
}
