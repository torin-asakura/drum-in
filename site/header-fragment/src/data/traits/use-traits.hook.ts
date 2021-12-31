import { Query }      from '@globals/data'

import { GET_TRAITS } from './traits.query'

const useTraits = () => {
  const query = new Query(GET_TRAITS)
  return query.execute().name('traits').nodes().sortByOrder().end()
}

export { useTraits }
