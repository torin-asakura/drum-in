export type ConsultationDataProps = {
  cta?: {
    __typename?: 'ConsultationCta'
    title?: string | null
    button?: string | null
    text?: {
      __typename?: 'ConsultationCtaText'
      beforeAccent?: string | null
      accent?: string | null
      afterAccent?: string | null
    } | null
  } | null
  modal?: {
    __typename?: 'ConsultationModal'
    title?: string | null
    subtitle?: string | null
    textForCheckbox?: string | null
  } | null
} | null
