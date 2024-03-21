import { gql } from '../../__generated__'

export const GET_FOOTER = gql(`
query Footer{
 generalFragments {
    nodes {
      commonFragments {
        footer {
          email
          privacyPolicy
          logo {
            node {
              sourceUrl
            }
          }
          courses {
            title
            path
          }
          socials {
            title
            link
          }
        }
      }
    }
  }
}
`)
