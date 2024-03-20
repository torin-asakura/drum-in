import { gql } from '../../__generated__'

export const GET_FOOTER = gql(`
query Footer{
  generalFragments {
    nodes {
          commonFragments {
        footer {
          logo {
            node {
              sourceUrl
            }
          }
          email
          privacyPolicy
          courses {
            nodes {
              link
            }
          }
          socials {
            nodes {
              link
            }
          }
        }
      }
    }
  }
}
`)
