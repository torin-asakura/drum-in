import { useQuery }    from '@apollo/client'

import { GET_CONTACT } from './contact.query'

const useContact = () => useQuery(GET_CONTACT).data?.contactPageItem

export { useContact }
