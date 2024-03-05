import { gql } from '@apollo/client'

const GET_CONTRACT_OFFER = gql`
  query GetContractOffer {
    contractOfferItem(id: "cG9zdDo0ODQ=") {
      title
      contractOffer {
        text
      }
    }
  }
`

export { GET_CONTRACT_OFFER }
