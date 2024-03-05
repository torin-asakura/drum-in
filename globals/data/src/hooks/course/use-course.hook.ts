import { useQuery }   from '@apollo/client'

import { GET_COURSE } from '../../queries'
import { CourseID }   from '../../query.constants'

export const useCourse = (id: CourseID = CourseID.OPENING_RHYTHM) => {
  const { data } = useQuery(GET_COURSE, { variables: { id } })

  return { course: data?.course }
}
