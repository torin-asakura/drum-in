/* eslint-disable spaced-comment */

import React                                    from 'react'
import { FC }                                   from 'react'

import { START_PERCENT }                        from './icon.constants'
import { COMPARISON_OPERATOR_GREATER }          from './icon.constants'
import { COMPARISON_OPERATOR_GREATER_OR_EQUAL } from './icon.constants'
import { FIFTH_STEP_PERCENT }                   from './icon.constants'
import { THIRD_STEP_PERCENT }                   from './icon.constants'
import { FOURTH_STEP_PERCENT }                  from './icon.constants'
import { SECOND_STEP_PERCENT }                  from './icon.constants'
import { FIRST_STEP_PERCENT }                   from './icon.constants'
import { FINISH_PERCENT }                       from './icon.constants'
import { PROGRESS_LINE_SIZE }                   from './icon.constants'
import { PROGRESS_SCALE }                       from './icon.constants'
import { IconProps }                            from './icon.interfaces'
import { getElementColor }                      from '../helpers'

export const CourseProgramIcon: FC<IconProps> = ({ progress }) => {
  const size = PROGRESS_LINE_SIZE
  const offset = size - (progress * size) / PROGRESS_SCALE

  const whiteCircleIconColor = getElementColor(progress, COMPARISON_OPERATOR_GREATER, START_PERCENT)

  const firstStepColor = getElementColor(
    progress,
    COMPARISON_OPERATOR_GREATER_OR_EQUAL,
    FIRST_STEP_PERCENT
  )
  const secondStepColor = getElementColor(
    progress,
    COMPARISON_OPERATOR_GREATER_OR_EQUAL,
    SECOND_STEP_PERCENT
  )
  const thirdStepColor = getElementColor(
    progress,
    COMPARISON_OPERATOR_GREATER_OR_EQUAL,
    THIRD_STEP_PERCENT
  )
  const fourthStepColor = getElementColor(
    progress,
    COMPARISON_OPERATOR_GREATER_OR_EQUAL,
    FOURTH_STEP_PERCENT
  )
  const fifthStepColor = getElementColor(
    progress,
    COMPARISON_OPERATOR_GREATER_OR_EQUAL,
    FIFTH_STEP_PERCENT
  )

  const violetCircleIconColor = progress === FINISH_PERCENT ? 'white' : 'mediumPurple'

  return (
    <svg
      width='5000'
      height='971'
      viewBox='3500 0 5000 971'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/*background*/}
      <rect width='9000' height='971' fill='#0F0C0C' />

      {/*main line*/}
      <path
        d='M4066 524L4755.5 416.037L5267.5 508.296L5784 460.204L6312 496.519L6859.5 423.5L7502 496.519'
        stroke='#807F7F'
        strokeWidth='4'
      />

      {/*progress line*/}
      <path
        d='M4066 524L4755.5 416.037L5267.5 508.296L5784 460.204L6312 496.519L6859.5 423.5L7502 496.519'
        stroke='white'
        strokeWidth='4'
        strokeDasharray={size}
        strokeDashoffset={offset}
      />

      {/*white circle icon*/}
      <g clipPath='url(#clip0_1035_3661)'>
        <path
          d='M4052.9 516.98C4054.48 515.195 4055.11 512.584 4057.74 511.778C4059.02 510.353 4061.99 508.29 4060.2 506.202C4057.92 504.162 4056.14 507.65 4054.72 509.006C4054.3 511.829 4052.01 512.416 4050.47 513.948C4047.41 517.16 4044.38 520.398 4041.37 523.664C4040.89 523.409 4040.41 523.166 4039.93 522.922C4037.81 521.82 4035.13 521.846 4033.71 519.494C4032.01 518.594 4029.29 516.223 4027.7 518.474C4026.27 521.177 4030.09 522.06 4031.74 523.1C4034.58 522.82 4035.71 524.905 4037.57 526.025L4038.65 526.629C4032.16 533.731 4025.73 540.909 4019.25 548.016C4019.15 548.163 4019.05 548.306 4018.94 548.442C4014.4 543.786 4011.25 537.959 4009.84 531.613C4008.42 525.267 4008.81 518.653 4010.94 512.512C4013.07 506.371 4016.88 500.946 4021.92 496.844C4026.96 492.743 4033.05 490.128 4039.5 489.291C4045.94 488.454 4052.49 489.43 4058.42 492.108C4064.34 494.786 4069.4 499.061 4073.03 504.454C4076.66 509.847 4078.72 516.144 4078.97 522.641C4079.23 529.137 4077.67 535.576 4074.47 541.235C4064.76 535.98 4055.04 530.732 4045.23 525.653C4047.81 522.776 4050.36 519.885 4052.9 516.98ZM4042.45 528.753C4035.67 536.283 4028.81 543.739 4021.97 551.193C4025.65 554.173 4029.89 556.377 4034.45 557.669C4039 558.962 4043.77 559.318 4048.46 558.715C4053.16 558.112 4057.68 556.563 4061.76 554.161C4065.84 551.759 4069.39 548.555 4072.2 544.742C4062.26 539.458 4052.3 534.205 4042.45 528.764L4042.45 528.753Z'
          fill={whiteCircleIconColor}
        />
      </g>

      {/*purple circle icon*/}
      <g clipPath='url(#clip1_1035_3661)'>
        <path
          d='M7586.8 482.96C7589.97 479.39 7591.23 474.168 7596.49 472.557C7599.04 469.706 7604.98 465.58 7601.39 461.403C7596.85 457.323 7593.27 464.3 7590.45 467.013C7589.61 472.659 7585.02 473.832 7581.94 476.897C7575.82 483.319 7569.76 489.796 7563.75 496.327C7562.78 495.817 7561.83 495.333 7560.86 494.843C7556.63 492.64 7551.25 492.691 7548.41 487.989C7545.01 486.189 7539.57 481.446 7536.4 485.949C7533.54 491.355 7541.18 493.119 7544.48 495.2C7550.16 494.639 7552.42 498.811 7556.15 501.05L7558.3 502.258C7545.32 516.462 7532.47 530.818 7519.5 545.031C7519.31 545.327 7519.1 545.611 7518.88 545.883C7509.8 536.572 7503.5 524.918 7500.67 512.226C7497.85 499.534 7498.61 486.306 7502.88 474.024C7507.15 461.742 7514.75 450.892 7524.84 442.689C7534.93 434.486 7547.1 429.255 7559.99 427.582C7572.89 425.909 7585.99 427.86 7597.84 433.216C7609.68 438.572 7619.8 447.123 7627.06 457.908C7634.33 468.694 7638.44 481.289 7638.95 494.282C7639.45 507.275 7636.33 520.152 7629.93 531.471C7610.51 520.96 7591.08 510.464 7571.47 500.305C7576.61 494.553 7581.73 488.771 7586.8 482.96ZM7565.89 506.507C7552.35 521.567 7538.63 536.479 7524.94 551.386C7532.3 557.347 7540.78 561.753 7549.89 564.339C7559 566.924 7568.54 567.636 7577.93 566.43C7587.32 565.224 7596.36 562.125 7604.52 557.322C7612.68 552.518 7619.78 546.109 7625.39 538.483C7605.51 527.916 7585.6 517.41 7565.91 506.527L7565.89 506.507Z'
          fill={violetCircleIconColor}
        />
      </g>

      {/*step circles*/}
      <circle cx='4755' cy='416' r='10' fill={firstStepColor} />
      <circle cx='5267' cy='508' r='10' fill={secondStepColor} />
      <circle cx='5784' cy='460' r='10' fill={thirdStepColor} />
      <circle cx='6311' cy='496' r='10' fill={fourthStepColor} />
      <circle cx='6859' cy='423' r='10' fill={fifthStepColor} />

      {/*step lines*/}
      <path d='M4755.5 415.5V321.5' stroke='url(#paint0_linear_1035_3661)' strokeWidth='4' />
      <path d='M5784 460V365' stroke='url(#paint1_linear_1035_3661)' strokeWidth='4' />
      <path d='M6859 423V518' stroke='url(#paint2_linear_1035_3661)' strokeWidth='4' />
      <path d='M5267 508V602' stroke='url(#paint3_linear_1035_3661)' strokeWidth='4' />
      <path d='M6311 496V590' stroke='url(#paint4_linear_1035_3661)' strokeWidth='4' />

      {/*step line gradients*/}
      <defs>
        <linearGradient
          id='paint0_linear_1035_3661'
          x1='4756'
          y1='321.5'
          x2='4756'
          y2='415.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={firstStepColor} stopOpacity='0' />
          <stop offset='1' stopColor={firstStepColor} />
        </linearGradient>

        <linearGradient
          id='paint3_linear_1035_3661'
          x1='5267.5'
          y1='602'
          x2='5267.5'
          y2='508'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={secondStepColor} stopOpacity='0' />
          <stop offset='1' stopColor={secondStepColor} />
        </linearGradient>

        <linearGradient
          id='paint1_linear_1035_3661'
          x1='5784.5'
          y1='365'
          x2='5784.5'
          y2='460'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={thirdStepColor} stopOpacity='0' />
          <stop offset='1' stopColor={thirdStepColor} />
        </linearGradient>

        <linearGradient
          id='paint4_linear_1035_3661'
          x1='6311.5'
          y1='590'
          x2='6311.5'
          y2='496'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={fourthStepColor} stopOpacity='0' />
          <stop offset='1' stopColor={fourthStepColor} />
        </linearGradient>

        <linearGradient
          id='paint2_linear_1035_3661'
          x1='6859.5'
          y1='518'
          x2='6859.5'
          y2='423'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={fifthStepColor} stopOpacity='0' />
          <stop offset='1' stopColor={fifthStepColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}
