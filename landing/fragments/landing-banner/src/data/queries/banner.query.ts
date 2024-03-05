import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    mainPageItem(id: "cG9zdDoyMTA=") {
      heroForMainPage {
        description
        titleButton
        tagsList {
          text
        }
      }
    }
  }
`

export { GET_BANNER }
