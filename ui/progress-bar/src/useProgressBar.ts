import { useEffect }           from 'react'

import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'
import { theme }               from '@ui/theme'

export function useProgressBar(scrollId, progressRef) {
  const { scroll } = useLocomotiveScroll()
  const { colors } = theme

  useEffect(() => {
    const renderProgress = (() => {
      const dashOffset = parseInt(getComputedStyle(progressRef.current!).strokeDashoffset, 10)
      const heightSvg = 1010
      const halfHeightWindow = window.innerHeight / 2
      const points = document.querySelectorAll<HTMLElement>(
        `[data-progress-bar-point="${scrollId}"]`
      )

      return () => {
        points.forEach((el) => {
          const { y } = el.getBoundingClientRect()
          el.style.fill = // eslint-disable-line no-param-reassign
            y - halfHeightWindow <= 0 ? colors.progressBar.progress : colors.progressBar.default
        })
        const { y } = progressRef.current!.getBoundingClientRect()
        const percentageComplete = ((y - halfHeightWindow) / (heightSvg - 65)) * 100
        const offsetUnit = (percentageComplete * dashOffset) / 100
        progressRef.current!.style.strokeDashoffset = (dashOffset - offsetUnit).toString() // eslint-disable-line no-param-reassign
      }
    })()
    if (scroll) {
      scroll.on('scroll', () => {
        renderProgress()
      })
    }
  }, [colors, progressRef, scroll, scrollId])
}
