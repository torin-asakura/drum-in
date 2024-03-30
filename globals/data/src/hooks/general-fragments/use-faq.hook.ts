import { useQuery } from '@apollo/client'

import { GET_FAQ }  from '../../queries'

export const useFaq = () => {
  const { data } = useQuery(GET_FAQ)
  const faq = data?.generalFragments?.nodes[0].commonFragments?.faq
  return { faq }
}
