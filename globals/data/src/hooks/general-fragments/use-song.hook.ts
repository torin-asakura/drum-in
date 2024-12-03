import { useQuery }          from '@apollo/client'

import { GET_SONG }          from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useSong = () => {
  const { data } = useQuery(GET_SONG, {
    variables: { id: GeneralFragmentID.SONG },
    fetchPolicy: 'cache-and-network',
  })

  const songUrl = data?.generalFragment?.audio?.song?.node?.mediaItemUrl

  return { songUrl }
}
