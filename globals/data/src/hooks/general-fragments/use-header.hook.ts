import { useQuery }   from '@apollo/client'

import { GET_HEADER } from '../../queries'

export const useHeader = () => {
  const { data } = useQuery(GET_HEADER)

  return { data }
}
