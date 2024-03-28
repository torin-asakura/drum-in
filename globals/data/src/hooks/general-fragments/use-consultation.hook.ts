import { useQuery } from '@apollo/client'

import { GET_CONSULTATION }  from '../../queries'

export const useConsultation = () => {
  const { data } = useQuery(GET_CONSULTATION)
  const consultation = data?.generalFragments?.nodes[0].commonFragments?.consultation
  return { consultation }
}
