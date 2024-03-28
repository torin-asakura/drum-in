import { useQuery }         from '@apollo/client'

import { GET_CHOSE_COURSE } from './chose-course.query'

const useChoseCourse = () => useQuery(GET_CHOSE_COURSE).data?.choseCourse.nodes

export { useChoseCourse }
