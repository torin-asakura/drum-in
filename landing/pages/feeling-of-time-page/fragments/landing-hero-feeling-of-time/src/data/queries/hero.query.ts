import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    courseFeelingOfTimeItem(id: "cG9zdDozNjY=") {
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
