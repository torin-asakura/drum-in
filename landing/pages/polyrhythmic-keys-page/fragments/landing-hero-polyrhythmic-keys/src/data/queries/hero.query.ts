import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    coursePolyrhythmicKeysItem(id: "cG9zdDo0MDc=") {
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
