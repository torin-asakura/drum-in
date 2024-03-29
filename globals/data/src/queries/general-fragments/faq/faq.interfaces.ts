export interface FaqDataProps {
  faqData: {
    generalFragments?: {
      nodes: Array<{
        commonFragments?: {
          faq?: Array<{ answer?: string | null; question?: string | null } | null> | null
        } | null
      }>
    } | null
  }
}
