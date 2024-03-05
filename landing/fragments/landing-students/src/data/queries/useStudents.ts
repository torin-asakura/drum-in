import { useQuery }     from '@apollo/client'

import { GET_STUDENTS } from './students.query'

const useStudents = () => useQuery(GET_STUDENTS).data?.mainPageItem

export { useStudents }
