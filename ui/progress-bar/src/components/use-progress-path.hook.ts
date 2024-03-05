import { useCallback }                     from 'react'
import { useEffect }                       from 'react'

import { useLocomotiveScroll }             from '@forks/react-locomotive-scroll'

import { HEIGHT_PATH_OF_PROGRESS_BAR_SVG } from '../progress-bar.constants'
import { throttle }                        from '../helpers'

export const useProgressPath = (id: string) => {
  const { scroll } = useLocomotiveScroll()
  const destroyScroll = useCallback(() => {
    if (scroll) scroll.destroy()
  }, [scroll])

  useEffect(() => {
    const progressPath = document.getElementById(id)
    if (!progressPath) return destroyScroll
    const dashOffset = parseInt(getComputedStyle(progressPath).strokeDashoffset, 10)
    const halfHeightWindow = window.innerHeight / 2
    const renderProgress = () => {
      const { y: yoPath } = progressPath.getBoundingClientRect()
      const percentageComplete =
        ((yoPath - halfHeightWindow) / HEIGHT_PATH_OF_PROGRESS_BAR_SVG) * 100
      const offsetUnit = (percentageComplete * dashOffset) / 100
      progressPath.style.strokeDashoffset = (dashOffset - offsetUnit).toString()
    }

    const throttleRender = throttle(renderProgress, 50)

    if (scroll) {
      scroll.on('scroll', (entries) => {
        if (entries.currentElements[id]) {
          throttleRender()
        }
      })
    }

    return destroyScroll
  }, [scroll, destroyScroll, id])
}
