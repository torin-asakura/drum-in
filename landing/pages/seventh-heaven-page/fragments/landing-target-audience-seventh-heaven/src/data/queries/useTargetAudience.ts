import { useQuery }            from '@apollo/client'

import { GET_TARGET_AUDIENCE } from './target-audience.query'

const useTargetAudience = () => useQuery(GET_TARGET_AUDIENCE).data?.courseSeventhHeavenItem

export { useTargetAudience }
