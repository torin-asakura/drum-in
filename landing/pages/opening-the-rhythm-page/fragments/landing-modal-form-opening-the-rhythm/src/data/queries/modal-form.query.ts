import { gql } from '@apollo/client'

const GET_MODAL_FORM = gql`
  query modalForm {
    courseOpeningTheRhytmItem(id: "cG9zdDozNTQ=") {
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
