import React                   from 'react'

import { ArrowLeftBottomIcon } from '@ui/icons'
import { ProgramIcon }         from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'

import { ContentCourse }       from './content-course'

const ProgramHorizontalBlock = () => (
  <Box display='block' height={7500} id='scroll'>
    <Box data-scroll data-scroll-sticky data-scroll-target='#scroll'>
      <Box
        data-scroll
        data-scroll-direction='horizontal'
        data-scroll-speed='9'
        data-scroll-target='#scroll'
        height='100vh'
        alignItems='center'
      >
        <Box>
          <ProgramIcon width={2612} height='auto' />
        </Box>
        <Layout flexBasis={275} flexShrink={0} />
        <ContentCourse />
        <Layout flexBasis={137} flexShrink={0} />
        <Column justifyContent='end'>
          <Box>
            <ArrowLeftBottomIcon width={283} height={236} />
          </Box>
          <Layout flexBasis={230} flexShrink={0} />
        </Column>
      </Box>
    </Box>
  </Box>
)

export { ProgramHorizontalBlock }
