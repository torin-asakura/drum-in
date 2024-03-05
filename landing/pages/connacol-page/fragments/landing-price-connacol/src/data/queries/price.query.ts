import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    courseConnacolItem(id: "cG9zdDozOTY=") {
      title
      tuitionFees {
        nameOfTheCharacteristicForCircle
        numberForTheCircle
        numberOfMonths
        numberOfVideoLessons
        priceInstallmentPlan
        savingsWithOneTimePayment
        titleForButton
        secondLineRectangle
      }
    }
  }
`

export { GET_PRICE }
