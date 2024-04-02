export type ContractOfferDataProps = {
  __typename?: 'ContractOffer'
  title?: string | null
  subtitle?: string | null
  creationYear?: string | null
  points?: Array<{
    __typename?: 'ContractOfferPoints'
    title?: string | null
    subtitle?: string | null
    description?: string | null
  } | null> | null
  background?: {
    __typename?: 'ContractOfferBackground'
    desktopFooter?: {
      __typename?: 'AcfMediaItemConnectionEdge'
      node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
    } | null
    mobileFooter?: {
      __typename?: 'AcfMediaItemConnectionEdge'
      node: { __typename?: 'MediaItem'; sourceUrl?: string | null }
    } | null
  } | null
} | null
