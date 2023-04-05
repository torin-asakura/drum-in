import { useQuery }           from '@apollo/client'

import { GET_COURSE_PROCESS } from './course-process.query'

const useCourseProcess = () => useQuery(GET_COURSE_PROCESS).data?.fragmentNewItem || []

export { useCourseProcess }
