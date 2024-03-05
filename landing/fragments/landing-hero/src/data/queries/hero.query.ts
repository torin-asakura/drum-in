import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    mainPageItem(id: "cG9zdDoyMTA=") {
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

export { GET_HERO }
