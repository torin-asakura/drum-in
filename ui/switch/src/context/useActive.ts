import { useContext } from 'react'

import { Context }    from './context'

const useActive = () => useContext(Context)

export { useActive }
