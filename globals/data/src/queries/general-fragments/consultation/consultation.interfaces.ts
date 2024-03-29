export interface ConsultationDataProps {
  consultationData: {
    generalFragments?: {
      nodes: Array<{
        commonFragments?: {
          consultation?: { title?: string | null; cta?: string | null } | null
        } | null
      }>
    } | null
  }
}
