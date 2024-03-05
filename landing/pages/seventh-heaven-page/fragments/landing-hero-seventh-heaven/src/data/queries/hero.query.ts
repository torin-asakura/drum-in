import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    courseSeventhHeavenItem(id: "cG9zdDozODg=") {
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
