import { useQuery } from '@apollo/client'

import { GET_CTA }  from '../../queries'

export const useCta = () => {
  const { data } = useQuery(GET_CTA)
  const cta = data?.generalFragments?.nodes[0].commonFragments?.cta
  return { cta }
}
