import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    courseOpeningTheRhytmItem(id: "cG9zdDoxNjc=") {
      title
      tuitionFees {
        nameOfTheCharacteristicForCircle
        numberForTheCircle
        numberOfMonths
        numberOfVideoLessons
        priceInstallmentPlan
        savingsWithOneTimePayment
        titleForButton
      }
    }
  }
`

export { GET_PRICE }
