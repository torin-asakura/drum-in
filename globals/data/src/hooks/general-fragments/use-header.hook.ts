import { useQuery }          from '@apollo/client'

import { GET_HEADER }        from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useHeader = () => {
  const { data } = useQuery(GET_HEADER, {
    variables: { id: GeneralFragmentID.HEADER },
    fetchPolicy: 'cache-only',
  })
  const headerData = data?.generalFragment?.header

  return { headerData }
}
