import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    courseSeventhHeavenItem(id: "cG9zdDozOTI=") {
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
