import React          from 'react'
import { forwardRef } from 'react'

import { theme }      from '@ui/theme'

interface Props {
  scrollId: string
}

type Ref = SVGPathElement

const ProgressBarSVG = forwardRef<Ref, Props>(({ scrollId }, progressRef) => {
  const { colors } = theme
  return (
    <svg
      width='130'
      height='1010'
      viewBox='0 0 130 1010'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          d='M 39.2 169.9 L 69.2 169.9'
          stroke='url(#paint0_linear_1904_16760)'
          strokeWidth='4'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1904_16760'
            x1='70'
            y1='2.5'
            x2='40'
            y2='2.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={colors.progressBar.default} stopOpacity='0' />
            <stop offset='1' stopColor={colors.progressBar.default} />
          </linearGradient>
        </defs>
      </g>
      <g>
        <path
          d='M 69.2 325.3 L 130.1 325.3'
          stroke='url(#paint0_linear_1904_16759)'
          strokeWidth='4'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1904_16759'
            x1='125'
            y1='2.5'
            x2='50'
            y2='2.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={colors.progressBar.default} stopOpacity='0' />
            <stop offset='1' stopColor={colors.progressBar.default} />
          </linearGradient>
        </defs>
      </g>
      <g>
        <path
          d='M 42.2 499.8 L 70.2 499.8'
          stroke='url(#paint0_linear_1904_16761)'
          strokeWidth='4'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1904_16761'
            x1='70'
            y1='2.5'
            x2='40'
            y2='2.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={colors.progressBar.default} stopOpacity='0' />
            <stop offset='1' stopColor={colors.progressBar.default} />
          </linearGradient>
        </defs>
      </g>
      <g>
        <path d='M 65.7 682 L 127.3 682' stroke='url(#paint0_linear_1904_16762)' strokeWidth='4' />
        <defs>
          <linearGradient
            id='paint0_linear_1904_16762'
            x1='125'
            y1='2.5'
            x2='50'
            y2='2.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={colors.progressBar.default} stopOpacity='0' />
            <stop offset='1' stopColor={colors.progressBar.default} />
          </linearGradient>
        </defs>
      </g>
      <g>
        <path
          d='M 46 864.3 L 107.6 864.3'
          stroke='url(#paint0_linear_1904_16763)'
          strokeWidth='4'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1904_16763'
            x1='90'
            y1='2.5'
            x2='40'
            y2='2.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={colors.progressBar.default} stopOpacity='0' />
            <stop offset='1' stopColor={colors.progressBar.default} />
          </linearGradient>
        </defs>
      </g>
      <g>
        <path
          d='M 28 983.1 L 45.5 864.6 L 3 780.1 L 66.2 680.5 L 3.5 588.6 L 42.4 498.5 L 4 411.1 L 71 324.5 L 3 251.1 L 40.5 169.6 L 4 73.6 L 24 23.1'
          stroke={colors.progressBar.default}
          strokeWidth='4'
        />
        <path
          ref={progressRef}
          style={{
            strokeDashoffset: 1090,
            strokeDasharray: 1090,
            fill: 'none',
            strokeWidth: 4,
          }}
          d='M 28 983.1 L 45.5 864.6 L 3 780.1 L 66.2 680.5 L 3.5 588.6 L 42.4 498.5 L 4 411.1 L 71 324.5 L 3 251.1 L 40.5 169.6 L 4 73.6 L 24 23.1'
          stroke={colors.progressBar.progress}
          strokeWidth='4'
        />
      </g>
      <g>
        <path
          data-progress-bar-point={scrollId}
          d='M 27.8 15.5 C 28.5 14.7 28.8 13.5 30 13.1 C 30.6 12.5 32 11.5 31.1 10.6 C 30.1 9.7 29.3 11.3 28.6 11.9 C 28.4 13.2 27.4 13.4 26.7 14.1 C 25.3 15.6 23.9 17.1 22.5 18.6 C 22.3 18.5 22.1 18.3 21.9 18.2 C 20.9 17.7 19.7 17.7 19 16.7 C 18.2 16.3 17 15.2 16.3 16.2 C 15.6 17.4 17.4 17.8 18.1 18.3 C 19.4 18.2 19.9 19.1 20.8 19.7 L 21.3 19.9 C 18.3 23.2 15.4 26.5 12.4 29.7 C 12.4 29.8 12.3 29.8 12.3 29.9 C 10.2 27.8 8.8 25.1 8.1 22.2 C 7.5 19.3 7.6 16.3 8.6 13.5 C 9.6 10.7 11.3 8.2 13.6 6.3 C 15.9 4.4 18.7 3.2 21.7 2.9 C 24.6 2.5 27.6 2.9 30.3 4.1 C 33 5.4 35.3 7.3 37 9.8 C 38.7 12.3 39.6 15.1 39.7 18.1 C 39.8 21.1 39.1 24 37.7 26.6 C 33.2 24.2 28.8 21.8 24.3 19.5 C 25.5 18.2 26.6 16.8 27.8 15.5 Z M 23 20.9 C 19.9 24.3 16.8 27.8 13.7 31.2 C 15.3 32.5 17.3 33.5 19.4 34.1 C 21.4 34.7 23.6 34.9 25.8 34.6 C 27.9 34.3 30 33.6 31.8 32.5 C 33.7 31.4 35.3 30 36.6 28.2 C 32.1 25.8 27.5 23.4 23 20.9 L 23 20.9 Z'
          fill={colors.progressBar.default}
        />
        <path
          data-progress-bar-point={scrollId}
          d='M 34.1 982.3 C 34.8 981.5 35.1 980.3 36.3 979.9 C 36.9 979.3 38.2 978.3 37.4 977.4 C 36.4 976.4 35.5 978 34.9 978.6 C 34.7 979.9 33.7 980.2 33 980.9 C 31.6 982.4 30.2 983.9 28.8 985.3 C 28.6 985.2 28.4 985.1 28.1 985 C 27.2 984.5 25.9 984.5 25.3 983.4 C 24.5 983 23.3 981.9 22.5 983 C 21.9 984.2 23.6 984.6 24.4 985.1 C 25.7 985 26.2 985.9 27.1 986.4 L 27.6 986.7 C 24.6 989.9 21.6 993.2 18.7 996.5 C 18.6 996.5 18.6 996.6 18.5 996.7 C 16.5 994.5 15 991.9 14.4 989 C 13.7 986.1 13.9 983.1 14.9 980.2 C 15.9 977.4 17.6 975 19.9 973.1 C 22.2 971.2 25 970 27.9 969.6 C 30.9 969.3 33.9 969.7 36.6 970.9 C 39.3 972.1 41.6 974.1 43.3 976.6 C 44.9 979 45.9 981.9 46 984.9 C 46.1 987.8 45.4 990.8 43.9 993.4 C 39.5 991 35 988.6 30.6 986.3 C 31.7 984.9 32.9 983.6 34.1 982.3 Z M 29.3 987.7 C 26.2 991.1 23.1 994.5 19.9 997.9 C 21.6 999.3 23.6 1000.3 25.6 1000.9 C 27.7 1001.5 29.9 1001.6 32 1001.4 C 34.2 1001.1 36.3 1000.4 38.1 999.3 C 40 998.2 41.6 996.7 42.9 995 C 38.3 992.6 33.8 990.2 29.3 987.7 L 29.3 987.7 Z'
          fill={colors.progressBar.default}
        />
        <circle
          data-progress-bar-point={scrollId}
          cx='38.5'
          cy='170'
          r='8'
          fill={colors.progressBar.default}
        />
        <circle
          data-progress-bar-point={scrollId}
          fill={colors.progressBar.default}
          cx='69'
          cy='325.5'
          r='8'
        />
        <circle
          data-progress-bar-point={scrollId}
          fill={colors.progressBar.default}
          cx='41'
          cy='499.9'
          r='8'
        />
        <circle
          data-progress-bar-point={scrollId}
          fill={colors.progressBar.default}
          cx='64.5'
          cy='682.3'
          r='8'
        />
        <circle
          data-progress-bar-point={scrollId}
          fill={colors.progressBar.default}
          cx='45'
          cy='864.2'
          r='8'
        />
      </g>
    </svg>
  )
})

export default ProgressBarSVG
