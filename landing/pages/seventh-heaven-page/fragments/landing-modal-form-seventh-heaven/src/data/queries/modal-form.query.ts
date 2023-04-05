import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    courseSeventhHeavenItem(id: "cG9zdDozOTI=") {
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
