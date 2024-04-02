import { gql } from '../../../__generated__'

export const GET_CONTACTS = gql(`
query Contacts($id: ID!){
    generalFragment(id:$id ) {
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
`)
