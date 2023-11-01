import React              from 'react'
import { useRef }         from 'react'

import ProgressBarSVG     from './progress-bar'
import { useProgressBar } from './useProgressBar'

const ProgressBar = ({ scrollId }) => {
  const progressRef = useRef(null)
  useProgressBar(scrollId, progressRef)
  return <ProgressBarSVG scrollId={scrollId} ref={progressRef} />
}

export { ProgressBar }
