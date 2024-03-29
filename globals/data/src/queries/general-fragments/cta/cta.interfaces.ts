export interface CtaDataProps {
  ctaData: {
    generalFragments?: {
      nodes: Array<{
        commonFragments?: {
          cta?: {
            title?: string | null
            button?: string | null
            text?: {
              beforeAccent?: string | null
              accent?: string | null
              afterAccent?: string | null
            } | null
          } | null
        } | null
      }>
    } | null
  }
}
