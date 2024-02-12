import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    course(id: "cG9zdDoyMjgx") {
      content
      title
      details {
        hero {
          runningLine
        }
      }
    }
  }
`

export { GET_BANNER }
