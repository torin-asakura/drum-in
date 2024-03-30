import { gql } from '../../../__generated__'

export const GET_CONTACTS = gql(`
query Contacts{
 generalFragments {
    nodes {
      commonFragments {
        contacts {
          title
          socials {
              title
            link
            content
          }
           background{
            mobile{node{sourceUrl}}
            desktop{node{sourceUrl}}
          }
        }
      }
    }
  }
}
`)
