import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    courseSeventhHeavenItem(id: "cG9zdDozOTE=") {
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
