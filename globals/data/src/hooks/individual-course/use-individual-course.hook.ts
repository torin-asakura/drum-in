import { useQuery }              from '@apollo/client'

import { GET_INDIVIDUAL_COURSE } from '../../queries'
import { PageID }                from '../../query.constants'

export const useIndividualCourse = (id: PageID) => {
  const { data } = useQuery(GET_INDIVIDUAL_COURSE, { variables: { id } })

  return data?.individualCourse
}
