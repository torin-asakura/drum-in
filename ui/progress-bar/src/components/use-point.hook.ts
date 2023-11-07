import { useEffect } from 'react'
import { useState }  from 'react'

import { theme }     from '@ui/theme'

export const usePoint = (id) => {
  const [fill, setFill] = useState(theme.colors.progressBar.default)
  useEffect(() => {
    const halfHeightWindow = window.innerHeight / 2
    const pointObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].boundingClientRect.top <= halfHeightWindow) {
          setFill(theme.colors.progressBar.progress)
        } else {
          setFill(theme.colors.progressBar.default)
        }
      },
      {
        rootMargin: '0% 0% -50% 0%',
        threshold: [0, 0.5],
      }
    )
    const point = document.getElementById(id)
    if (point) {
      pointObserver.observe(point)
    }
    return () => pointObserver.disconnect()
  }, [id])
  return { fill }
}
