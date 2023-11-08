import React                         from 'react'
import { FC }                        from 'react'

import { ProgressBarComponentProps } from '../progress-bar.interface'
import { usePoint }                  from './use-point.hook'

const Point: FC<ProgressBarComponentProps> = ({ id }) => {
  const { fill } = usePoint(id)
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' id={id}>
      <circle fill={fill} cx='8.5' cy='8' r='8' />
    </svg>
  )
}

export { Point }
