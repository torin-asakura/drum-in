import { gql } from '@apollo/client'

const GET_PRICE = gql`
  query Price {
    course(id: "cG9zdDoyMjgx") {
      details {
        price {
          title
          priceMonthly
          priceFull
          discountIfFull
          discount
        }
      }
    }
  }
`

export { GET_PRICE }
