import { useQuery }           from '@apollo/client'

import { GET_CONTRACT_OFFER } from './contract-offer.query'

const useContractOffer = () => useQuery(GET_CONTRACT_OFFER).data?.contractOfferItem

export { useContractOffer }
