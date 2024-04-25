/* eslint-disable consistent-return */

import { useEffect }                 from 'react'
import { useCallback }               from 'react'
import { useState }                  from 'react'

import { useLocomotiveScroll }       from '@forks/react-locomotive-scroll'

import { INITIAL_PROGRESS }          from './course-program-steps.constants'
import { UseCourseProgramStepsType } from './course-program-steps.interfaces'
import { getCalculateProgress }      from '../helpers'

export const useCourseProgramSteps: UseCourseProgramStepsType = (containerID, elementID) => {
  const { scroll } = useLocomotiveScroll()
  const [progress, setProgress] = useState<number>(INITIAL_PROGRESS)

  const updateProgress = useCallback(() => {
    if (!scroll) return
    const scrollContainer = document.getElementById(containerID)
    const scrollElement = document.getElementById(elementID)

    if (scrollContainer && scrollElement) {
      const { bottom: containerBottom } = scrollContainer.getBoundingClientRect()
      const { bottom: elementBottom } = scrollElement.getBoundingClientRect()
      const percentageProgress = getCalculateProgress(containerBottom, elementBottom)
      setProgress(percentageProgress)
    }
  }, [scroll, containerID, elementID])

  useEffect(() => {
    updateProgress()
    if (!scroll) return

    const handleScroll = () => {
      updateProgress()
    }

    scroll.on('scroll', handleScroll)

    return () => {
      scroll.off('scroll', handleScroll)
    }
  }, [scroll, updateProgress])

  return { progress }
}
