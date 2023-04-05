import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    courseFeelingOfTimeItem(id: "cG9zdDozNzE=") {
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
