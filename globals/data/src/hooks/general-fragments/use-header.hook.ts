import { useQuery }   from '@apollo/client'

import { GET_HEADER } from '../../queries'

export const useHeader = () => {
  const { data } = useQuery(GET_HEADER)
  const header = data?.generalFragments?.nodes[0].commonFragments?.header
  return { header }
}
