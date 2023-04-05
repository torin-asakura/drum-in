import { useContext } from 'react'

import { Context }    from './context'

const useData = () => useContext(Context)

export { useData }
