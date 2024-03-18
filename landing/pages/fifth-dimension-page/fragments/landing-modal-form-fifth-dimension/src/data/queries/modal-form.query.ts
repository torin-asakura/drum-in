import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    courseFifthDimensionItem(id: "cG9zdDozODc=") {
      modalForm {
        benefit
        finalPriceForInstallment
        finalPriceForInstallmentNumber
        finalPriceForOneTimePayment
        finalPriceForOneTimePaymentNumber
        installmentDuration
        monthlyPayment
        monthlyPaymentNumber
        title
        courses {
          description
          name
          price
        }
      }
    }
  }
`

export { GET_MODAL_FORM }
