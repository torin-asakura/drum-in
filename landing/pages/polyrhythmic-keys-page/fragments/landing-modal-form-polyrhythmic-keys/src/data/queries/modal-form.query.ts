import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    coursePolyrhythmicKeysItem(id: "cG9zdDo0MTA=") {
      modalForm {
        finalPriceForOneTimePayment
        finalPriceForOneTimePaymentNumber
        title
        courses {
          description
          name
        }
      }
    }
  }
`

export { GET_MODAL_FORM }
