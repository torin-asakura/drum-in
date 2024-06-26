import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const BullseyeIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 68 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M45.4111 17.1935C44.2768 15.7109 42.9855 14.7512 41.2044 14.0827C35.5003 11.9421 28.8519 11.8453 23.0858 13.7741C16.5664 15.955 11.6769 20.6645 9.39537 27.217C5.40189 38.6863 11.1367 49.9575 20.515 56.8184C27.7146 62.0855 38.1432 65.3496 46.592 60.9661C55.503 56.3427 58.5055 45.1069 56.3709 35.9196C55.2128 30.9356 52.521 26.0989 48.4125 22.9829C47.3438 22.1725 46.0549 21.6978 44.9683 20.9708'
        stroke='#F2F2F2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.8623 41.2447C10.6961 41.071 19.5557 40.1597 28.3552 39.4131C38.9257 38.5163 49.7111 37.582 60.0387 34.9721C62.0972 34.4519 64.072 33.5846 66.1374 33.1154'
        stroke='#F2F2F2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.8994 1.64685C23.135 11.0939 26.9831 20.1522 30.0198 29.1095C33.8829 40.504 37.4482 51.9897 40.7487 63.5618C41.3594 65.703 41.7367 68.3778 42.7173 70.3531'
        stroke='#F2F2F2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M38.4575 29.9219C36.4756 28.2824 34.4583 26.4669 31.6961 26.635C28.0079 26.8595 25.0053 29.9035 23.414 33.0404C20.1349 39.5042 24.7525 49.2232 32.5366 49.2115C39.3699 49.2012 43.7522 41.6772 42.8349 35.4191C42.3928 32.4025 40.5396 30.1518 38.3612 28.1895'
        stroke='#F2F2F2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
