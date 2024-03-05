import { useQuery }       from '@apollo/client'

import { GET_NAVIGATION } from './navigation.query'

const useNavigation = () => useQuery(GET_NAVIGATION).data || []

export { useNavigation }
