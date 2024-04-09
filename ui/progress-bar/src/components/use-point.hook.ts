import { useTheme }  from '@emotion/react'

import { useEffect } from 'react'
import { useState }  from 'react'

export const usePoint = (id: string) => {
  const theme: any = useTheme()
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
        rootMargin: theme.margins.rootMargin,
        threshold: [0, 0.5],
      }
    )
    const point = document.getElementById(id)
    if (point) {
      pointObserver.observe(point)
    }
    return () => pointObserver.disconnect()
  }, [id, theme])
  return { fill }
}
