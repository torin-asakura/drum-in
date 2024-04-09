import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const RockSignIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 77 79'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_2701_15613)'>
        <path
          d='M38.7168 40.3815L26.7499 19.6541C25.8739 18.1368 24.948 15.1671 27.9056 13.4595C30.8633 11.7519 32.9722 14.0386 33.8482 15.5559L49.2343 42.2054L52.7289 29.1332C53.3764 26.7111 55.056 24.7543 57.7107 25.4673C60.3654 26.1803 61.5837 27.8205 60.7879 30.7972L57.543 42.9357C57.543 42.9357 57.736 59.4062 54.0757 61.5195L38.696 70.3989C38.696 70.3989 35.1468 72.448 31.4131 71.4453C27.6793 70.4425 25.9697 67.4814 25.9697 67.4814L9.06621 38.2036C8.57454 37.352 7.75601 34.5682 10.7136 32.8607C13.6713 31.1531 15.6305 33.1804 16.1645 34.1054L24.5202 48.5779'
          stroke='#F2F2F2'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M29.5668 40.9267C28.4338 38.9643 25.9263 38.2909 23.9661 39.4226C22.006 40.5543 21.3355 43.0625 22.4685 45.025L26.5714 52.1315C27.7044 54.0939 30.2119 54.7673 32.1721 53.6357C34.1322 52.504 34.8028 49.9957 33.6698 48.0333L29.5668 40.9267Z'
          stroke='#F2F2F2'
          strokeWidth={2}
          strokeLinejoin='round'
        />
        <path
          d='M36.6644 36.8288C35.5314 34.8664 33.024 34.193 31.0638 35.3247C29.1037 36.4564 28.4331 38.9646 29.5661 40.9271L33.6691 48.0336C34.8021 49.996 37.3096 50.6694 39.2697 49.5378C41.2299 48.4061 41.9004 45.8978 40.7674 43.9354L36.6644 36.8288Z'
          stroke='#F2F2F2'
          strokeWidth={2}
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2701_15613'>
          <rect width={54} height={59} fill='white' transform='translate(0 27) rotate(-30)' />
        </clipPath>
      </defs>
    </svg>
  )
}
