import {gql} from '../../../__generated__'

export const GET_PAYMENT_SETTINGS = gql(`
  query PaymentSettings($id:ID!){
    generalFragment(id: $id) {
      siteSettings {
        paymentSettings{
          storeID
        }
      }
    }
  }
`)
