import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ReturnIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.23828 7.79028H2.48828V4.04028'
        stroke='#F2F2F2'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.13993 14.8614C6.10142 15.8228 7.32643 16.4776 8.66004 16.7429C9.99366 17.0082 11.376 16.872 12.6322 16.3517C13.8885 15.8313 14.9622 14.9501 15.7176 13.8195C16.4731 12.689 16.8763 11.3597 16.8763 10C16.8763 8.64026 16.4731 7.31105 15.7176 6.18046C14.9622 5.04987 13.8885 4.16868 12.6322 3.64833C11.376 3.12798 9.99366 2.99183 8.66004 3.2571C7.32643 3.52238 6.10142 4.17716 5.13993 5.13864L2.48828 7.79029'
        stroke='#F2F2F2'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
