import { useQuery }              from '@apollo/client'

import { GET_PROCESS_EDUCATION } from '../../queries'

export const useProcessEducation = () => {
  const { data } = useQuery(GET_PROCESS_EDUCATION)
  const processEducation = data?.generalFragments?.nodes[0].commonFragments?.process
  return { processEducation }
}
