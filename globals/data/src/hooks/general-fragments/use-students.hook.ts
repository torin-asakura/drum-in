import { useQuery }          from '@apollo/client'

import { GET_STUDENTS }      from '../../queries'
import { GeneralFragmentID } from '../../query.constants'

export const useStudents = () => {
  const { data } = useQuery(GET_STUDENTS, { variables: { id: GeneralFragmentID.STUDENTS } })
  const students = data?.generalFragment?.students
  return { students }
}
