import { useQuery }    from '@apollo/client'

import { GET_TEACHER } from './teacher.query'

const useTeacher = () => useQuery(GET_TEACHER).data?.fragmentNewItem

export { useTeacher }
