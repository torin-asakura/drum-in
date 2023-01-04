import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const TriangleIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg viewBox='0 0 100 70' width='1em' height='1em' {...props}>
      <polygon
        points='0,45 60,45 30,0'
        fill='#0F0C0C'
        stroke='#0F0C0C'
        strokeWidth={5}
        strokeLinejoin='round'
      />
      <polygon points='4,48 56,48 30,6' fill='#F2F2F2' />
    </svg>
  )
}
