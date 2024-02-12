import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    course(id: "cG9zdDoyMjgx") {
      details {
        hero {
          backgrounddesktop {
            desktop {
              node {
                sourceUrl
              }
            }
            mobile {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`

export { GET_HERO }
