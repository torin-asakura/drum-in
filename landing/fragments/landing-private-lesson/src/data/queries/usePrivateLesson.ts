import { useQuery }           from '@apollo/client'

import { GET_PRIVATE_LESSON } from './private-lesson.query'

const usePrivateLesson = () => useQuery(GET_PRIVATE_LESSON).data?.mainPageItem || []

export { usePrivateLesson }
