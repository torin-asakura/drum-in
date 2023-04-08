import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    courseFifthDimensionItem(id: "cG9zdDozODM=") {
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
