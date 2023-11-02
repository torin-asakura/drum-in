import { useEffect }                       from 'react'

import { useLocomotiveScroll }             from '@forks/react-locomotive-scroll'
import { theme }                           from '@ui/theme'

import { HEIGHT_PATH_OF_PROGRESS_BAR_SVG } from './progress-bar.consts'

export const useProgressBar = (scrollId, progressRef) => {
  const { scroll } = useLocomotiveScroll()
  const { colors } = theme

  useEffect(() => {
    const halfHeightWindow = window.innerHeight / 2
    const dashOffsetPathOfProgressBarSVG = parseInt(
      getComputedStyle(progressRef.current).strokeDashoffset,
      10
    )
    const pointsOfProgressBarSVG = document.querySelectorAll<HTMLElement>(
      `[data-progress-bar-point="${scrollId}"]`
    )
    const renderProgress = () => {
      pointsOfProgressBarSVG.forEach((point) => {
        const { y: oyPiont } = point.getBoundingClientRect()
        point.style.fill = // eslint-disable-line no-param-reassign
          oyPiont - halfHeightWindow <= 0 ? colors.progressBar.progress : colors.progressBar.default
      })
      const { y: oyPathOfProgressBarSVG } = progressRef.current.getBoundingClientRect()
      const percentageComplete =
        ((oyPathOfProgressBarSVG - halfHeightWindow) / HEIGHT_PATH_OF_PROGRESS_BAR_SVG) * 100
      const offsetUnit = (percentageComplete * dashOffsetPathOfProgressBarSVG) / 100
      progressRef.current.style.strokeDashoffset = ( // eslint-disable-line no-param-reassign
        dashOffsetPathOfProgressBarSVG - offsetUnit
      ).toString()
    }
    if (scroll) {
      scroll.on('scroll', () => {
        renderProgress()
      })
    }
  }, [colors, progressRef, scroll, scrollId])
}
