import { useQuery }   from '@apollo/client'

import { GET_BANNER } from './banner.query'

const useBanner = () => useQuery(GET_BANNER).data?.course

export { useBanner }
