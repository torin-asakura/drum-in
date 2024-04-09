import { useQuery }          from '@apollo/client'

import { GET_TEACHER }       from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useTeacher = () => {
  const { data } = useQuery(GET_TEACHER, { variables: { id: GeneralFragmentID.TEACHER } })
  const teacherData = data?.generalFragment?.teacher || {}

  return { teacherData }
}
