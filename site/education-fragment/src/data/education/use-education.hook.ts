import { Query }         from '@globals/data'

import { GET_EDUCATION } from './education.query'

const useEducation = () => {
  const query = new Query(GET_EDUCATION)
  return query
    .execute()
    .name('educationNotes')
    .nodes()
    .end()
    .find((node) => node.addons.side === 'left')
}

export { useEducation }
