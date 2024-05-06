import { useQuery }              from '@apollo/client'

import { GET_INDIVIDUAL_COURSE } from '../../queries'
import { CourseID }              from '../../query.constants'

export const useIndividualCourse = (id: CourseID) => {
  const { data } = useQuery(GET_INDIVIDUAL_COURSE, { variables: { id },fetchPolicy:'cache-only' })
  const background = data?.individualCourse?.individualCourseData?.background

  return { individualCourse: data?.individualCourse, background }
}
