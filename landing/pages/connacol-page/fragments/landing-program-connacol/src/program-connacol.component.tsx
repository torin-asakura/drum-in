import React                    from 'react'
import { FC }                   from 'react'

import { CourseProgramSteps }   from '@shared/course-program-steps'
import { ArrowTopDownIcon }     from '@ui/icons'
import { ProgramIcon }          from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'

import { ContentMobileCourse }  from './content-mobile-course'
import { ProgramConnacolProps } from './program-connacol.interfaces'

export const SCROLL_CONTAINER_ID = 'scroll'
export const SCROLL_ELEMENT_ID = 'scroll_element'

const ProgramConnacolBlock: FC<ProgramConnacolProps> = ({ background, connacolData, scrollId }) => {
  return (
    <>
      <Row justifyContent='center' display={['none', 'none', 'flex']}>
        <Box
          id={SCROLL_CONTAINER_ID}
          position='relative'
          height={5000}
          data-scroll-position='bottom'
          width={1920}
          flexShrink={0}
        >
          <Box
            position='relative'
            data-scroll
            data-scroll-sticky
            data-scroll-target='#scroll'
            height={1000}
            flexShrink={0}
            width={9000}
          >
            <Box
              position='relative'
              data-scroll
              data-scroll-direction='horizontal'
              data-scroll-speed='12'
              data-scroll-target='#scroll'
              data-scroll-position='left'
              height={1000}
              width={9000}
              flexShrink={0}
              alignItems='center'
              id={SCROLL_ELEMENT_ID}
            >
              <Layout width={2600} flexShrink={0} />
              <Box width={2600} flexShrink={0}>
                <ProgramIcon width='100%' height='auto' />
              </Box>
              <Box
                data-scroll
                data-scroll-target='#scroll'
                width={3500}
                height={1000}
                flexShrink={0}
              >
                <CourseProgramSteps containerID={SCROLL_CONTAINER_ID} elementID={SCROLL_ELEMENT_ID}/>
              </Box>
              <Box width={280} position='absolute' right={400}>
                <ArrowTopDownIcon width='100%' height='auto' />
              </Box>
            </Box>
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
          <ContentMobileCourse connacolData={connacolData} scrollId={scrollId} />
          <Layout flexBasis={[32, 44, 0]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Row>
    </>
  )
}

export { ProgramConnacolBlock }
