import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowRightUpIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 138 92'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M136.56 6.32773C136.697 6.31156 136.824 6.26714 136.937 6.20228C137.266 6.01211 137.469 5.64072 137.425 5.24226C137.366 4.70799 136.88 4.32587 136.342 4.38951C136.341 4.39 136.34 4.38965 136.338 4.38979C134.03 4.66367 132.003 4.87454 130.204 5.01388C130.006 4.8857 129.76 4.82909 129.507 4.87277C129.357 4.89878 128.868 4.98645 128.103 5.14861C120.686 5.51145 117.609 4.30223 113.909 0.704879C113.523 0.328691 112.903 0.339401 112.522 0.726461C112.142 1.11351 112.147 1.73127 112.532 2.10577C115.296 4.79237 117.773 6.28822 121.526 6.868C110.377 10.2869 91.1109 18.7182 86.9925 36.8573C86.3739 39.5817 86.0111 41.8841 85.8426 43.8304C81.4729 43.6005 76.4874 44.2735 72.9948 44.8996C48.8672 49.2203 10.3169 66.2416 0.159696 90.5636C-0.0474786 91.062 0.187679 91.6321 0.687119 91.8361C1.18692 92.0387 1.76039 91.802 1.96708 91.3028C11.84 67.6654 49.6415 51.0596 73.3292 46.8186C78.2089 45.9447 82.4385 45.6025 85.7327 45.7744C85.6004 51.5676 87.4619 53.4873 88.8662 54.113C90.1045 54.6648 91.4254 54.4339 92.5245 53.7993C93.193 53.4133 93.7789 52.8784 94.2129 52.2805C95.5746 50.4096 95.4986 48.1594 94.0197 46.5493C92.6925 45.1058 90.4326 44.34 87.79 44.0021C87.9544 42.1211 88.309 39.8909 88.9022 37.2756C93.1201 18.697 115.055 10.6653 124.965 7.94694C120.691 10.2671 117.771 13.1799 115.669 15.2772L115.639 15.3067C115.255 15.6905 115.254 16.3082 115.637 16.6877C116.019 17.0672 116.641 17.0577 117.023 16.6797C120.657 13.0507 126.15 7.56867 136.545 6.32955C136.549 6.32843 136.555 6.32801 136.56 6.32773ZM89.6759 52.3315C88.5052 51.8104 87.6058 49.8466 87.6822 45.9516C90.0056 46.2625 91.6838 46.9054 92.571 47.8713C93.8347 49.2459 92.9353 50.7228 92.6307 51.1426C91.949 52.0825 90.7129 52.7939 89.6759 52.3315Z'
        fill='#F2F2F2'
      />
    </svg>
  )
}