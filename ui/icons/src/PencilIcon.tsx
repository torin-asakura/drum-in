import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const PencilIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 68 103'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.00195 80.3135C19.8272 58.4905 32.7035 37.4563 47.1565 17.2109'
        stroke='#F2F2F2'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.252 87.1493C30.34 65.0634 42.6907 43.5034 55.8299 21.9434'
        stroke='#F2F2F2'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M61.8721 14.5813C63.7116 12.2149 66.0766 9.32272 64.4999 5.90466C63.9743 5.11588 63.186 4.3271 62.1349 4.06417C61.0837 3.80125 60.0326 3.27539 59.2443 3.27539C58.7187 3.27539 58.1931 3.27539 57.6675 3.53832C56.6164 4.06417 55.8281 5.37881 55.0397 6.43052C54.2514 7.48223 53.463 8.53394 52.6747 9.84857C51.8864 11.1632 50.8352 12.7408 50.0469 14.0554C50.0469 14.0554 54.5142 17.7364 57.142 19.051'
        stroke='#F2F2F2'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.42584 85.834C5.90028 88.9891 5.37472 92.4072 4.84915 95.5623C4.58637 96.8769 4.32359 98.4545 3.27246 99.5062C3.79803 98.7174 4.32358 97.9286 5.11193 97.4028C7.73975 95.2994 10.6304 93.1959 13.7838 91.3555'
        stroke='#F2F2F2'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
