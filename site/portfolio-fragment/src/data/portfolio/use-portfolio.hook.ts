import { Query }         from '@globals/data'

import { GET_EDUCATION } from './education.query'

const usePortfolio = () => {
  const query = new Query(GET_EDUCATION)
  return query
    .execute()
    .name('educationNotes')
    .nodes()
    .end()
    .find((node) => node.addons.side === 'right')
}

export { usePortfolio }
