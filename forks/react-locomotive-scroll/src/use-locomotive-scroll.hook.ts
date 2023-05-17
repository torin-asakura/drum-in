import { useContext }                   from 'react'

import { LocomotiveScrollContext }      from './locomotive-scroll.context'
import { LocomotiveScrollContextValue } from './locomotive-scroll.context'

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  return useContext(LocomotiveScrollContext)
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll'
