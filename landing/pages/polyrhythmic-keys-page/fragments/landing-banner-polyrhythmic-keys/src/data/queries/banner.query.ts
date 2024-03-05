import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    coursePolyrhythmicKeysItem(id: "cG9zdDo0MDc=") {
      heroForPolyrhythmicKeys {
        description
        title
      }
    }
  }
`

export { GET_BANNER }
