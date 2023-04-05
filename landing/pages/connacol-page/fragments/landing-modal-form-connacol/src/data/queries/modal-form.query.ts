import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    courseConnacolItem(id: "cG9zdDozOTc=") {
      modalForm {
        benefit
        finalPriceForInstallment
        finalPriceForOneTimePayment
        installmentDuration
        monthlyPayment
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
