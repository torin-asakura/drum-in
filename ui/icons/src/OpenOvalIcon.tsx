import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const OpenOvalIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 404 131'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M184.587 131C166.74 131 148.212 130.41 129.134 129.221C56.1225 124.677 12.2144 112.142 2.14877 92.9772C-1.95026 85.1647 -0.162695 76.4203 7.32227 67.6864C25.5835 46.3791 75.2521 26.0311 140.182 13.2547C213.896 -1.25034 297.223 -3.95101 374.808 5.64926C376.135 5.81409 377.057 6.88337 376.868 8.03717C376.678 9.19309 375.466 10.0088 374.127 9.83339C202.404 -11.4191 44.4779 31.4007 11.2103 70.2159C4.75856 77.741 3.19657 84.8076 6.5631 91.219C11.8579 101.307 34.8731 119.117 129.478 125.007C278.743 134.299 369.657 105.407 393.533 72.6525C400.023 63.7517 400.94 55.1362 396.184 47.7378C387.828 34.7332 362.841 27.2229 329.355 27.7153H329.316C327.995 27.7153 326.913 26.7918 326.891 25.6359C326.869 24.4694 327.939 23.5079 329.278 23.4889C365.085 22.9965 391.037 31.0795 400.416 45.6711C406.017 54.3839 405.027 64.7702 397.63 74.9178C384.816 92.4975 355.109 107.698 313.985 117.712C277.851 126.514 233.809 131 184.587 131Z'
        fill='#F2F2F2'
      />
    </svg>
  )
}