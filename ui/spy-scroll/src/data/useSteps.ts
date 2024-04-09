import { useEffect }               from 'react'
import { useState }                from 'react'

import { SpyScroll as SSpyScroll } from '@shared/data'
import { useMockedSpyScroll }      from '@shared/data'

const useSteps = () => {
  const { spyScroll: spyScrollData } = useMockedSpyScroll()
  const [spyScroll, setSpyScroll] = useState<SSpyScroll[]>([])

  useEffect(() => {
    setSpyScroll(spyScrollData)
    // eslint-disable-next-line
  }, [])

  return spyScroll
}

export { useSteps }
