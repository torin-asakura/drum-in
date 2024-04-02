import { gql } from '../../../__generated__'

export const GET_CONTRACT_OFFER = gql(`
query ContractOffer($id: ID!){
  generalFragment(id:$id) {
        contractOffer {
          title
          subtitle
          creationYear
          points {
            title
            subtitle
            description
          }
          background{
          desktopFooter{node{sourceUrl}}
          mobileFooter{node{sourceUrl}}
          }
        }
      }
    }
`)
