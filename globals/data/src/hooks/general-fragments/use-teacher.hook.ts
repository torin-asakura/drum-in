import { useQuery }              from '@apollo/client'

import { GET_TEACHER } from '../../queries'

export const useTeacher = () => {
  const { data } = useQuery(GET_TEACHER)
  const teacherData = data?.generalFragments?.nodes[0].commonFragments?.teacher

  return { teacherData }
}
