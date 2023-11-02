import React                from 'react'
import { FC }               from 'react'
import { useRef }           from 'react'

import ProgressBarSVG       from './progress-bar'
import { ProgressBarProps } from './progress-bar.interface'
import { useProgressBar }   from './use-progress-bar.hook'

const ProgressBar: FC<ProgressBarProps> = ({ scrollId }) => {
  const progressRef = useRef(null)
  useProgressBar(scrollId, progressRef)
  return <ProgressBarSVG scrollId={scrollId} ref={progressRef} />
}

export { ProgressBar }
