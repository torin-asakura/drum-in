import React                   from 'react'

import { Background }          from '@ui/background'
import { ArrowTopDownIcon }    from '@ui/icons'
import { ProgramIcon }         from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'

import { ContentCourse }       from './content-course'
import { ContentMobileCourse } from './content-mobile-course'

const ProgramHorizontalBlock = () => (
  <>
    <Row justifyContent='center' display={['none', 'none', 'flex']}>
      <Box
        display='block'
        position='relative'
        height={{ _: 0, tablet: 0, laptop: 6000, wide: 7300 }}
        id='scroll'
        data-scroll-position='bottom'
        width={1920}
      >
        <Box
          data-scroll
          data-scroll-sticky
          data-scroll-target='#scroll'
          zIndex={4}
          position='relative'
        >
          <Box
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='9'
            data-scroll-target='#scroll'
            data-scroll-position='left'
            data-scroll-offset='50%'
            height='100vh'
            width={{ _: 0, tablet: 0, laptop: 8090, wide: 10122 }}
            flexShrink={0}
          >
            <Background
              display='flex'
              alignItems='center'
              width='100%'
              height='100%'
              backgroundPosition={{
                _: 0,
                tablet: 0,
                laptop: 'left center',
                wide: '-1000px center',
              }}
              backgroundSize='100%'
              gradient='progressLineWithBlackBackground'
            >
              <Layout flexBasis={{ _: 0, tablet: 0, laptop: 2700, wide: 2000 }} flexShrink={0} />
              <Box width={{ _: 0, tablet: 0, laptop: 2000, wide: 2612 }}>
                <ProgramIcon width='100%' height='auto' />
              </Box>
              <Layout flexBasis={{ _: 0, tablet: 0, laptop: 720, wide: 970 }} flexShrink={0} />
              <ContentCourse />
              <Layout flexBasis={{ _: 0, tablet: 0, laptop: 500, wide: 627 }} flexShrink={0} />
              <Column justifyContent='end'>
                <Box width={{ _: 0, tablet: 0, laptop: 170, wide: 283 }}>
                  <ArrowTopDownIcon width='100%' height='auto' />
                </Box>
                <Layout flexBasis={{ _: 0, tablet: 0, laptop: 160, wide: 230 }} flexShrink={0} />
              </Column>
            </Background>
          </Box>
        </Box>
        <Box
          data-scroll
          data-scroll-sticky
          data-scroll-target='#scroll'
          position='absolute'
          top={0}
          left={0}
          zIndex={1}
        >
          <Box
            data-scroll-speed='9'
            height='100vh'
            width={{ _: 0, tablet: 0, laptop: '55vw', wide: '32vw' }}
            flexShrink={0}
            backgroundColor='background.smokyWhite'
          />
        </Box>
      </Box>
    </Row>
    <Row display={['flex', 'flex', 'none']}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[32, 44, 0]} />
        <Box width={[335, 480, 0]}>
          <ProgramIcon width='100%' height='auto' />
        </Box>
        <Layout flexBasis={[81, 110, 0]} />
        <ContentMobileCourse />
        <Layout flexBasis={[32, 44, 0]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  </>
)

export { ProgramHorizontalBlock }
