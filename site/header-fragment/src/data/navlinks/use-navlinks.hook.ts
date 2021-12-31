import { Query }        from '@globals/data'

import { GET_NAVLINKS } from './navlinks.query'

const useNavlinks = () => {
  const query = new Query(GET_NAVLINKS)
  return query.execute().name('navlinks').nodes().sortByOrder().end()
}

export { useNavlinks }
