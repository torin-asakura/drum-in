import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const FlagCubaIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 116 116'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.5742 47.125H111.287C109.655 39.15 106.212 31.7188 101.499 25.375H19.5742V47.125ZM19.5742 68.875V90.625H101.499C106.212 84.2812 109.655 76.85 111.287 68.875H19.5742Z'
        fill='#F9F9F9'
      />
      <path
        d='M111.287 47.125H19.5742V68.875H111.287C112.012 65.4313 112.374 61.8063 112.374 58C112.374 54.1937 112.012 50.5687 111.287 47.125ZM19.5742 25.375H101.499C91.5305 12.1437 75.7617 3.625 57.9992 3.625C42.9555 3.625 29.3617 9.7875 19.5742 19.575V25.375ZM19.5742 90.625V96.425C29.3617 106.213 42.9555 112.375 57.9992 112.375C75.7617 112.375 91.5305 103.856 101.499 90.625H19.5742Z'
        fill='#428BC1'
      />
      <path
        d='M19.575 19.5752C9.7875 29.3627 3.625 42.9564 3.625 58.0002C3.625 73.0439 9.7875 86.6377 19.575 96.4252L58 58.0002L19.575 19.5752Z'
        fill='#ED4C5C'
      />
      <path
        d='M18.125 68.875L25.375 63.8L32.625 68.875L29.9062 60.5375L37.1562 55.2812H28.0938L25.375 47.125L22.6562 55.2812H13.5938L20.8438 60.5375L18.125 68.875Z'
        fill='#F9F9F9'
      />
      <rect x={2} y={2} width={112} height={112} rx={56} stroke='#F2F2F2' strokeWidth={4} />
    </svg>
  )
}
