import { useQuery }        from '@apollo/client'

import { GET_BACKGROUNDS } from './backgrounds.query'

const useBackgrounds = () => useQuery(GET_BACKGROUNDS).data?.mainPageItem || []

export { useBackgrounds }
