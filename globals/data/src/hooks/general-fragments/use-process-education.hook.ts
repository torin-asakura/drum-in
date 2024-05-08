import { useQuery }              from '@apollo/client'

import { GET_PROCESS_EDUCATION } from '../../queries'
import { GeneralFragmentID }     from '../../query.constants'

export const useProcessEducation = () => {
  const { data } = useQuery(GET_PROCESS_EDUCATION, {
    variables: { id: GeneralFragmentID.PROCESS },
    fetchPolicy: 'cache-only',
  })
  const processEducationData = data?.generalFragment?.learningProcess
  return { processEducationData }
}
