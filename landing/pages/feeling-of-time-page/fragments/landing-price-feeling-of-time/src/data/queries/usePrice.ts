import { useQuery }  from '@apollo/client'

import { GET_PRICE } from './price.query'

const usePrice = () => useQuery(GET_PRICE).data?.courseFeelingOfTimeItem

export { usePrice }