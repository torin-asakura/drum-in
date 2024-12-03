import { useQuery }          from '@apollo/client'

import { GET_FAQ }           from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useFaq = () => {
  const { data } = useQuery(GET_FAQ, {
    variables: { id: GeneralFragmentID.FAQ },
    fetchPolicy: 'cache-and-network',
  })
  const faqData = data?.generalFragment?.faq?.content

  return { faqData }
}
