import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const PlayIcon = (props: IconProps) => {
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
        d='M32.0834 17.5401L11.8366 5.16665C11.6661 5.06243 11.4709 5.00553 11.2711 5.00178C11.0712 4.99804 10.874 5.0476 10.6997 5.14536C10.5254 5.24312 10.3803 5.38556 10.2793 5.55802C10.1782 5.73047 10.125 5.92673 10.125 6.12659V30.8734C10.125 31.0732 10.1782 31.2695 10.2793 31.442C10.3803 31.6144 10.5254 31.7569 10.6997 31.8546C10.874 31.9524 11.0712 32.0019 11.2711 31.9982C11.4709 31.9944 11.6661 31.9375 11.8366 31.8333L32.0834 19.4599C32.2478 19.3594 32.3837 19.2184 32.4779 19.0503C32.5722 18.8822 32.6217 18.6927 32.6217 18.5C32.6217 18.3073 32.5722 18.1178 32.4779 17.9497C32.3837 17.7816 32.2478 17.6405 32.0834 17.5401Z'
        stroke={theme.colors[props.color || 0] || props.color || '#0F0C0C'}
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
