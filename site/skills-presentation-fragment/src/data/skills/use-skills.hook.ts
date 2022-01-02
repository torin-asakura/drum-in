import { Query }      from '@globals/data'

import { GET_SKILLS } from './skills.query'

const useSkills = () => {
  const query = new Query(GET_SKILLS)
  return query.execute().name('skills').nodes().sortByOrder().end()
}

export { useSkills }
