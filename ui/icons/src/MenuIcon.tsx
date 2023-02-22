import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const MenuIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 13C5 12.4477 5.44772 12 6 12H33.9965C34.5488 12 34.9965 12.4477 34.9965 13C34.9965 13.5523 34.5488 14 33.9965 14H6C5.44772 14 5 13.5523 5 13ZM5 20C5 19.4477 5.44772 19 6 19H33.9965C34.5488 19 34.9965 19.4477 34.9965 20C34.9965 20.5523 34.5488 21 33.9965 21H6C5.44772 21 5 20.5523 5 20ZM6 26C5.44772 26 5 26.4477 5 27C5 27.5523 5.44772 28 6 28H33.9965C34.5488 28 34.9965 27.5523 34.9965 27C34.9965 26.4477 34.5488 26 33.9965 26H6Z'
        fill='#F2F2F2'
      />
    </svg>
  )
}
