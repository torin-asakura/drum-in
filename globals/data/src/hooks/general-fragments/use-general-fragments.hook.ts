import { useQuery }              from '@apollo/client'

import { GET_GENERAL_FRAGMENTS } from '../../queries'

export const useGeneralFragments = () => {
  const { data } = useQuery(GET_GENERAL_FRAGMENTS)

  return { data }
}
