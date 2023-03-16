import { useQuery }       from '@apollo/client'

import { normalizer }     from '@globals/data'

import { GET_NAVIGATION } from './navigation.query'

const useNavigation = () => normalizer(useQuery(GET_NAVIGATION).data?.menuCourses.nodes || [])

export { useNavigation }
