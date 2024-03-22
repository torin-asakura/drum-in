import { useEffect } from 'react'
import { useState }  from 'react'

export const useViewportBreakpoint = () => {
  const [viewport, setViewport] = useState(0)

  const handleResize = () => setViewport(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isWideViewport: viewport > 1500,
  }
}
