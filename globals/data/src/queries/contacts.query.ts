import { gql } from '../__generated__'

export const GET_CONTACTS = gql(`
query Contacts{
 generalFragments {
    nodes {
      commonFragments {
        contacts {
          title
          socials {
            title
            content
          }
          background{
            node{
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`)
