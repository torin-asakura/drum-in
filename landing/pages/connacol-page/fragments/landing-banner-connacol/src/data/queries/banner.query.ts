import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    courseConnacolItem(id: "cG9zdDozOTM=") {
      heroForConnacolCourse {
        description
        title
        tags {
          text
        }
      }
    }
  }
`

export { GET_BANNER }
