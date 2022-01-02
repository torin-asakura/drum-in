import { Query }         from '@globals/data'

import { GET_FRAGMENTS } from './fragments.query'

const useFragment = () => {
  const query = new Query(GET_FRAGMENTS)
  return query.execute().name('fragments').nodes().sortByOrder().end()[3]
}

export { useFragment }
