import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    courseOpeningTheRhytmItem(id: "cG9zdDoxNDM=") {
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
