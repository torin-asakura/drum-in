import { useQuery }       from '@apollo/client'

import { GET_BACKGROUND } from './background.query'

const useBackground = () => useQuery(GET_BACKGROUND).data?.contactPageItem.backgroundForHero || []

export { useBackground }
