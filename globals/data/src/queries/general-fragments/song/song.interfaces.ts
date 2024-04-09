export type SongUrlType = string | null

export type SongDataProps = {
  __typename?: 'RootQuery'
  generalFragment?: {
    __typename?: 'GeneralFragment'
    audio?: {
      __typename?: 'Audio'
      song?: {
        __typename?: 'AcfMediaItemConnectionEdge'
        node: { __typename?: 'MediaItem'; mediaItemUrl?: SongUrlType }
      } | null
    } | null
  } | null
}
