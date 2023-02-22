import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const EducationIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.375 16.5L22 5.5L42.625 16.5L22 27.5L1.375 16.5Z'
        stroke='#9C65F2'
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M32.3125 41.25V22L22 16.5'
        stroke='#9C65F2'
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M37.8125 19.0667V28.4374C37.8131 28.734 37.7172 29.0228 37.5393 29.2602C36.3814 30.8009 31.4966 36.4375 22 36.4375C12.5034 36.4375 7.61857 30.8009 6.4607 29.2602C6.28282 29.0228 6.18693 28.734 6.1875 28.4374V19.0667'
        stroke='#9C65F2'
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
