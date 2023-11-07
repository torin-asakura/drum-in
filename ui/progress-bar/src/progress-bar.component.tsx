import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'

import LogoPoint            from './components/logo-point.component'
import Point                from './components/point.component'
import ProgressPath         from './components/progress-path.component'
import { DefaultPath }      from './components/default-path.component'
import { ProgressBarProps } from './progress-bar.interface'

const ProgressBar: FC<ProgressBarProps> = ({ scrollId }) => (
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
    <Box position='absolute' top={162} left='32px'>
      <Point id={`${scrollId}_point_1`} />
    </Box>
    <Box position='absolute' top={318} left='64px'>
      <Point id={`${scrollId}_point_2`} />
    </Box>
    <Box position='absolute' top={492} left='32px'>
      <Point id={`${scrollId}_point_3`} />
    </Box>
    <Box position='absolute' top={674} left='55px'>
      <Point id={`${scrollId}_point_4`} />
    </Box>
    <Box position='absolute' top={857} left='35px'>
      <Point id={`${scrollId}_point_5`} />
    </Box>
    <Box position='absolute' top={970} left='13px'>
      <LogoPoint id={`${scrollId}_point_end`} />
    </Box>
  </Box>
)

export { ProgressBar }
