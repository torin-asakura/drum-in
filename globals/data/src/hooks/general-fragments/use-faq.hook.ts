import { useQuery } from '@apollo/client'

import { GET_FAQ }  from '../../queries'

export const useFaq = () => {
  const { data } = useQuery(GET_FAQ)

  return { data }
}
