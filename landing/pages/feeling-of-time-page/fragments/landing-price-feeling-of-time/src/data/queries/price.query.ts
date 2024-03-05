import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    courseFeelingOfTimeItem(id: "cG9zdDozNjk=") {
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
