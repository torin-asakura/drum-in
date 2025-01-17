import React                         from 'react'
import { FC }                        from 'react'

import { ProgressBarComponentProps } from '../progress-bar.interface'
import { usePoint }                  from './use-point.hook'

const LogoPoint: FC<ProgressBarComponentProps> = ({ id }) => {
  const { fill } = usePoint(id)
  return (
    <svg width='35' height='35' viewBox='0 0 35 35' xmlns='http://www.w3.org/2000/svg' id={id}>
      <path
        fill={fill}
        d='M 19.8 12.5 c 0.7 -0.8 1 -2 2.2 -2.4 c 0.6 -0.6 2 -1.6 1.1 -2.5 c -1 -0.9 -1.8 0.7 -2.5 1.3 c -0.2 1.3 -1.2 1.5 -1.9 2.2 l -4.2 4.5 c -0.2 -0.1 -0.4 -0.3 -0.6 -0.4 c -1 -0.5 -2.2 -0.5 -2.9 -1.5 c -0.8 -0.4 -2 -1.5 -2.7 -0.5 c -0.7 1.2 1.1 1.6 1.8 2.1 c 1.3 -0.1 1.8 0.8 2.7 1.4 l 0.5 0.2 c -3 3.3 -5.9 6.6 -8.9 9.8 c 0 0.1 -0.1 0.1 -0.1 0.2 c -2.1 -2.1 -3.5 -4.8 -4.2 -7.7 c -0.6 -2.9 -0.5 -5.9 0.5 -8.7 c 1 -2.8 2.7 -5.3 5 -7.2 c 2.3 -1.9 5.1 -3.1 8.1 -3.4 c 2.9 -0.4 5.9 0 8.6 1.2 c 2.7 1.3 5 3.2 6.7 5.7 c 1.7 2.5 2.6 5.3 2.7 8.3 c 0.1 3 -0.6 5.9 -2 8.5 c -4.5 -2.4 -8.9 -4.8 -13.4 -7.1 c 1.2 -1.3 2.3 -2.7 3.5 -4 z M 15 17.9 c -3.1 3.4 -6.2 6.9 -9.3 10.3 c 1.6 1.3 3.6 2.3 5.7 2.9 c 2 0.6 4.2 0.8 6.4 0.5 c 2.1 -0.3 4.2 -1 6 -2.1 c 1.9 -1.1 3.5 -2.5 4.8 -4.3 c -4.5 -2.4 -9.1 -4.8 -13.6 -7.3 z'
      />
    </svg>
  )
}

export { LogoPoint }
