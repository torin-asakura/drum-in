import { gql } from '@apollo/client'

const GET_TRAITS = gql`
  query GetTraits {
    traits {
      nodes {
        title
        content
        addons {
          order
        }
      }
    }
  }
`

export { GET_TRAITS }
