import { useQuery }       from '@apollo/client'

import { GET_ADVANTAGES } from './advantages.query'

const useAdvantages = () => useQuery(GET_ADVANTAGES).data?.courseConnacolItem

export { useAdvantages }
