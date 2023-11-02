import { useEffect }           from 'react'

import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'
import { theme }               from '@ui/theme'

export function useProgressBar(scrollId, progressRef) {
  const { scroll } = useLocomotiveScroll()
  const { colors } = theme
  const heightPath = 945

  useEffect(() => {
    const halfHeightWindow = window.innerHeight / 2
    const dashOffsetPath = parseInt(getComputedStyle(progressRef.current).strokeDashoffset, 10)
    const points = document.querySelectorAll<HTMLElement>(`[data-progress-bar-point="${scrollId}"]`)
    const renderProgress = () => {
      points.forEach((point) => {
        const { y: oyPiont } = point.getBoundingClientRect()
        point.style.fill = // eslint-disable-line no-param-reassign
          oyPiont - halfHeightWindow <= 0 ? colors.progressBar.progress : colors.progressBar.default
      })
      const { y: oyPath } = progressRef.current.getBoundingClientRect()
      const percentageComplete = ((oyPath - halfHeightWindow) / heightPath) * 100
      const offsetUnit = (percentageComplete * dashOffsetPath) / 100
      progressRef.current.style.strokeDashoffset = (dashOffsetPath - offsetUnit).toString() // eslint-disable-line no-param-reassign
    }
    if (scroll) {
      scroll.on('scroll', () => {
        renderProgress()
      })
    }
  }, [colors, progressRef, scroll, scrollId])
}
