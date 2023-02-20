import React                   from 'react'

import { ArrowLeftBottomIcon } from '@ui/icons'
import { ProgramIcon }         from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'

import { ContentCourse }       from './content-course'

const ProgramHorizontalBlock = () => (
  <Row justifyContent='center'>
    <Box
      display='block'
      height={6700}
      id='scroll'
      data-scroll-position='bottom'
      width={['100%', '100%', 1920]}
    >
      <Box data-scroll data-scroll-sticky data-scroll-target='#scroll'>
        <Box
          data-scroll
          data-scroll-direction='horizontal'
          data-scroll-speed='9'
          data-scroll-target='#scroll'
          height='100vh'
          alignItems='center'
          data-scroll-position='left'
          data-scroll-offset='50%'
        >
          <Layout flexBasis={2000} flexShrink={0} />
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
  </Row>
)

export { ProgramHorizontalBlock }
