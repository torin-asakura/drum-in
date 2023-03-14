import { useQuery }             from '@apollo/client'

import { GET_AFTER_THE_COURSE } from './after-the-courser.query'

const useAfterTheCourser = () => useQuery(GET_AFTER_THE_COURSE).data?.courseOpeningTheRhytmItem

export { useAfterTheCourser }
