import { gql } from '@apollo/client'

const GET_HEADER = gql`
  query Header {
    fragmentNewItem(id: "cG9zdDozMDk=") {
      header {
        nameButton
        titleLink
        urlLink
      }
    }
  }
`

export { GET_HEADER }
