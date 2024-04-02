import { useQuery }          from '@apollo/client'

import { GET_FOOTER }        from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useFooter = () => {
  const { data } = useQuery(GET_FOOTER, { variables: { id: GeneralFragmentID.FOOTER } })
  const footer = data?.generalFragment?.footer
  return { footer }
}
