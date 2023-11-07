import React        from 'react'

import { usePoint } from './use-point.hook'

const Point = ({ id }) => {
  const { fill } = usePoint(id)
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' id={id}>
      <circle fill={fill} cx='8.5' cy='8' r='8' />
    </svg>
  )
}

export default Point
