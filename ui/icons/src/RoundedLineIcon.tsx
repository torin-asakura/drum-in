import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const RoundedLineIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 37 3'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x={0.5} width={36} height={3} rx={1.5} fill='#D9D9D9' />
    </svg>
  )
}
