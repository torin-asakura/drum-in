import { gql } from '@apollo/client'

const GET_NAVLINKS = gql`
  query GetNavlinks {
    navlinks {
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

export { GET_NAVLINKS }
