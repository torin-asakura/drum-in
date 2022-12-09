import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const InvertedExclamationMarkIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 4 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.752218 13V3.89906H3.24794V13H0.752218ZM2.9488 2.52372C2.69239 2.77275 2.37615 2.89727 2.00008 2.89727C1.62401 2.89727 1.30777 2.77275 1.05136 2.52372C0.794953 2.27469 0.666748 1.97189 0.666748 1.61532C0.666748 1.25309 0.794953 0.950294 1.05136 0.706922C1.30777 0.45789 1.62401 0.333374 2.00008 0.333374C2.37615 0.333374 2.69239 0.45789 2.9488 0.706922C3.20521 0.950294 3.33341 1.25309 3.33341 1.61532C3.33341 1.97189 3.20521 2.27469 2.9488 2.52372Z'
        fill={theme.colors[props.color || 0] || props.color || '#0F0C0C'}
      />
    </svg>
  )
}
