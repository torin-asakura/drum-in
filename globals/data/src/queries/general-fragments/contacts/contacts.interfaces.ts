export type ContactsDataProps = {
  title?: string | null
  socials?: Array<{
    title?: string | null
    link?: string | null
    content?: string | null
  } | null> | null
  background?: {
    noise?: { node: { sourceUrl?: string | null } } | null
    mobile?: {
      node: { sourceUrl?: string | null }
    } | null
    desktop?: {
      node: { sourceUrl?: string | null }
    } | null
  } | null
}
