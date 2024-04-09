import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ComputerMouseIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 3C8.41015 3 5.5 5.91015 5.5 9.5V14.5C5.5 18.0899 8.41015 21 12 21C15.5899 21 18.5 18.0899 18.5 14.5V9.5C18.5 5.91015 15.5899 3 12 3ZM12.875 6.75C12.875 6.26675 12.4832 5.875 12 5.875C11.5168 5.875 11.125 6.26675 11.125 6.75V10.75C11.125 11.2332 11.5168 11.625 12 11.625C12.4832 11.625 12.875 11.2332 12.875 10.75V6.75Z'
        fill='#0F0C0C'
      />
    </svg>
  )
}
