import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    coursePolyrhythmicKeysItem(id: "cG9zdDo0MDk=") {
      title
      tuitionFeesWithoutInstallment {
        numberOfMonths
        numberOfVideoLessons
        oldPrice
        price
        secondLineRectangle
      }
    }
  }
`

export { GET_PRICE }
