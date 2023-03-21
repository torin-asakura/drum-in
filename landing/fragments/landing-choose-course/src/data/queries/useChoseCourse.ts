import { useQuery }         from '@apollo/client'

import { normalizer }       from '@globals/data'

import { GET_CHOSE_COURSE } from './chose-course.query'

const useChoseCourse = () => normalizer(useQuery(GET_CHOSE_COURSE).data?.choseCourse.nodes || [])

export { useChoseCourse }
