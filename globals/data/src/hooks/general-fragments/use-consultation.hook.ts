import { useQuery }          from '@apollo/client'

import { GET_CONSULTATION }  from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useConsultation = () => {
  const { data } = useQuery(GET_CONSULTATION, { variables: { id: GeneralFragmentID.CONSULTATION } })
  const consultation = data?.generalFragment?.consultation
  return { consultation }
}
