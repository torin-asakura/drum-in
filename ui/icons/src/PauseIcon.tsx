import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const PauseIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 36 37'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M28.125 6.125H23.0625C22.4412 6.125 21.9375 6.62868 21.9375 7.25V29.75C21.9375 30.3713 22.4412 30.875 23.0625 30.875H28.125C28.7463 30.875 29.25 30.3713 29.25 29.75V7.25C29.25 6.62868 28.7463 6.125 28.125 6.125Z'
        stroke={theme.colors[props.color || 0] || props.color || '#0F0C0C'}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.9375 6.125H7.875C7.25368 6.125 6.75 6.62868 6.75 7.25V29.75C6.75 30.3713 7.25368 30.875 7.875 30.875H12.9375C13.5588 30.875 14.0625 30.3713 14.0625 29.75V7.25C14.0625 6.62868 13.5588 6.125 12.9375 6.125Z'
        stroke={theme.colors[props.color || 0] || props.color || '#0F0C0C'}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
