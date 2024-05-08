import { useQuery }          from '@apollo/client'

import { GET_CONSULTATION }  from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useConsultation = () => {
  const { data } = useQuery(GET_CONSULTATION, {
    variables: { id: GeneralFragmentID.CONSULTATION },
    fetchPolicy: 'cache-only',
  })
  const consultationData = data?.generalFragment?.consultation
  return { consultationData }
}
