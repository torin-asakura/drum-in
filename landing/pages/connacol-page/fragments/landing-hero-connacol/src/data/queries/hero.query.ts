import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    courseConnacolItem(id: "cG9zdDozOTM=") {
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
