export interface FooterDataProps {
  footerData: {
    generalFragments?: {
      nodes: Array<{
        commonFragments?: {
          footer?: {
            email?: string | null
            privacyPolicy?: { title?: string | null; path?: string | null } | null
            logo?: { node: { sourceUrl?: string | null } } | null
            courses?: Array<{ title?: string | null; path?: string | null } | null> | null
            socials?: Array<{ title?: string | null; link?: string | null } | null> | null
          } | null
        } | null
      }>
    } | null
  }
}
