import { useQuery }          from '@apollo/client'

import { GET_HEADER }        from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useHeader = () => {
  const { data } = useQuery(GET_HEADER, { variables: { id: GeneralFragmentID.HEADER } })
  const header = data?.generalFragment?.header
  return { header }
}
