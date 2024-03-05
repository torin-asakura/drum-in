import { useQuery }    from '@apollo/client'

import { GET_PROGRAM } from './program.query'

const useProgram = () => useQuery(GET_PROGRAM).data?.courseFifthDimensionItem?.program

export { useProgram }
