import { Query }    from '@globals/data'

import { GET_LOGO } from './logo.query'

const useLogo = () => {
  const query = new Query(GET_LOGO)
  return query.execute().name('mediaItems').node().image().end()
}

export { useLogo }
