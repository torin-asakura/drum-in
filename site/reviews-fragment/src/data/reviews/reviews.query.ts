import { gql } from '@apollo/client'

const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      nodes {
        content
      }
    }
  }
`

export { GET_REVIEWS }
