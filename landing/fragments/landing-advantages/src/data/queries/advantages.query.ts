import { gql } from '@apollo/client'

const GET_ADVANTAGES = gql`
  query Advantages {
    courseConnacolItem(id: "cG9zdDozOTQ=") {
      title
      advantagesCourse {
        skills {
          item
          counter
        }
      }
    }
  }
`

export { GET_ADVANTAGES }
