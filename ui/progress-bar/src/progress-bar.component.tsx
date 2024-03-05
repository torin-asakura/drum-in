import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'

import { DefaultPath }      from './components/default-path.component'
import { LogoPoint }        from './components/logo-point.component'
import { Point }            from './components/point.component'
import { ProgressPath }     from './components/progress-path.component'
import { ProgressBarProps } from './progress-bar.interface'

const ProgressBar: FC<ProgressBarProps> = ({ scrollId }) => {
  const points = [
    { top: '162px', left: '32px' },
    { top: '318px', left: '64px' },
    { top: '492px', left: '32px' },
    { top: '674px', left: '55px' },
    { top: '857px', left: '35px' },
  ]
  return (
    <Box position='relative'>
      <Box position='absolute' top={0}>
        <DefaultPath />
      </Box>
      <Box position='absolute' top={0} data-scroll data-scroll-id={`${scrollId}_progress_path`}>
        <ProgressPath id={`${scrollId}_progress_path`} />
      </Box>
      <Box position='absolute' top={0} left='10px'>
        <LogoPoint id={`${scrollId}_point_start`} />
      </Box>
      {points.map(({ top, left }, index) => (
        <Box position='absolute' top={top} left={left}>
          <Point id={`${scrollId}_point_${index + 1}`} />
        </Box>
      ))}
      <Box position='absolute' top={970} left='13px'>
        <LogoPoint id={`${scrollId}_point_end`} />
      </Box>
    </Box>
  )
}

export { ProgressBar }
