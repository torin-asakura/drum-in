import { useQuery }     from '@apollo/client'

import { GET_CONTACTS } from '../../queries'

export const useContacts = () => {
  const { data } = useQuery(GET_CONTACTS)
  const contacts = data?.generalFragments?.nodes[0].commonFragments?.contacts
  return { contacts }
}
