import { useQuery }   from '@apollo/client'

import { GET_HEADER } from './header.query'

const useHeader = () => useQuery(GET_HEADER).data?.fragmentNewItem.header || []

export { useHeader }
