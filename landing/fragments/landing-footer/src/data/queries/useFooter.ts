import { useQuery }   from '@apollo/client'

import { GET_FOOTER } from './footer.query'

const useFooter = () => useQuery(GET_FOOTER).data || []

export { useFooter }
