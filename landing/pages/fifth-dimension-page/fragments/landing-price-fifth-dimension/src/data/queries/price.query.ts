import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    courseFifthDimensionItem(id: "cG9zdDozODY=") {
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
