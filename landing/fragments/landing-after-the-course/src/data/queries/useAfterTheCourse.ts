import { useQuery }             from '@apollo/client'

import { GET_AFTER_THE_COURSE } from './after-the-course.query'

const useAfterTheCourse = () => useQuery(GET_AFTER_THE_COURSE).data?.courseOpeningTheRhytmItem

export { useAfterTheCourse }
