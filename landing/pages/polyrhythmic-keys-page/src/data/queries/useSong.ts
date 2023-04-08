import { useQuery } from '@apollo/client'

import { GET_SONG } from './song.query'

const useSong = () => useQuery(GET_SONG).data?.fragmentNewItem?.song || []

export { useSong }
