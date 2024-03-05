import { gql } from '@apollo/client'

const GET_BACKGROUND = gql`
  query Background {
    contactPageItem(id: "cG9zdDo0MTk=") {
      backgroundForHero {
        backgroundForHero {
          sourceUrl
        }
        backgroundMobileForHero {
          sourceUrl
        }
      }
    }
  }
`

export { GET_BACKGROUND }
