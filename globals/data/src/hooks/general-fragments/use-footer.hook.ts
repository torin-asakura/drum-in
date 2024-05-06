import { useQuery }          from '@apollo/client'

import { GET_FOOTER }        from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useFooter = () => {
  const { data } = useQuery(GET_FOOTER, {
    variables: { id: GeneralFragmentID.FOOTER },
    fetchPolicy: 'cache-only',
  })
  const footerData = data?.generalFragment?.footer
  return { footerData }
}
