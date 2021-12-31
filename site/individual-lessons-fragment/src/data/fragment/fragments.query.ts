import { gql } from '@apollo/client'

const GET_FRAGMENTS = gql`
  query GetFragments {
    fragments {
      nodes {
        title
        content
        addons {
          order
          prefix
          suffix
          picture {
            altText
            sourceUrl
            mediaItemUrl
            link
          }
        }
      }
    }
  }
`

export { GET_FRAGMENTS }
