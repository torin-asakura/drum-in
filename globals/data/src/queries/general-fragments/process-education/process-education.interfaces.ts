export type ProcessEducationDataProps = Array<{
  title?: string | null
  text?: string | null
  picture?: {
    alt?: string | null
    image?: {
      node: {
        sourceUrl?: string | null
      } | null
    } | null
  } | null
} | null> | null
