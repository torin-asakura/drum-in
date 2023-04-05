import { useQuery }             from '@apollo/client'

import { GET_LEARNING_PROCESS } from './learning-process.query'

const useLearningProcess = () => useQuery(GET_LEARNING_PROCESS).data?.mainPageItem

export { useLearningProcess }
