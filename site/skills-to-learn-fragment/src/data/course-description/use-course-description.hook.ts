import { Query }                   from '@globals/data'

import { GET_COURSE_DESCRIPTIONS } from './course-descriptions.query'

const useCourseDescription = () => {
  const query = new Query(GET_COURSE_DESCRIPTIONS)
  return query.execute().name('courseDescriptions').nodes().sortByOrder().end()
}

export { useCourseDescription }
