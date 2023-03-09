import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowDownIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 32 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1035_4318)'>
        <path
          d='M14.0128 -31.0195C13.8777 -8.10129 16.5703 37.3731 14.0128 65.2653'
          stroke='#F2F2F2'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.03906 43.7952C10.4839 51.6105 12.6176 59.9162 14.1043 68.2757C14.3279 69.5328 14.3846 70.8789 14.7249 72.118C14.8936 72.7324 14.9138 70.8599 15.0113 70.2313C16.4275 61.1059 19.7206 52.6449 22.5301 43.8872C22.7204 43.294 22.8809 41.6474 23.5804 41.3103'
          stroke='#F2F2F2'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1035_4318'>
          <rect width={32} height={75} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
