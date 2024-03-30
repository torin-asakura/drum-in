import { useQuery }   from '@apollo/client'

import { GET_FOOTER } from '../../queries'

export const useFooter = () => {
  const { data } = useQuery(GET_FOOTER)
  const footer = data?.generalFragments?.nodes[0].commonFragments?.footer
  return { footer }
}
