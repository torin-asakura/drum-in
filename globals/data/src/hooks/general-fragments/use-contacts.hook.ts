import { useQuery }          from '@apollo/client'

import { GET_CONTACTS }      from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useContacts = () => {
  const { data } = useQuery(GET_CONTACTS, {
    variables: { id: GeneralFragmentID.CONTACTS },
    fetchPolicy: 'cache-only',
  })
  const contacts = data?.generalFragment?.contacts
  return { contacts }
}
