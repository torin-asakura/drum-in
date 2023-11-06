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
    <Box position='absolute' top={0}>
      <ProgressPath />
    </Box>
    <Box position='absolute' top={0} left={10}>
      <LogoPoint />
    </Box>
    <Box position='absolute' top={162} left={4}>
      <Point />
    </Box>
    <Box position='absolute' top={318} left={5}>
      <Point />
    </Box>
    <Box position='absolute' top={492} left={4}>
      <Point />
    </Box>
    <Box position='absolute' top={674} left={5}>
      <Point />
    </Box>
    <Box position='absolute' top={857} left={4}>
      <Point />
    </Box>
    <Box position='absolute' top={970} left={13}>
      <LogoPoint />
    </Box>
  </Box>
)

export { ProgressBar }
