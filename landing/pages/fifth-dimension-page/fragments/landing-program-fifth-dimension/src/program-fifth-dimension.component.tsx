import React                          from 'react'
import { FC }                         from 'react'

import { CourseProgramParallax }      from '@shared/course-program-parallax/src'
import { StepsInformation }           from '@shared/course-program-steps-information/src'
import { ProgramIcon }                from '@ui/icons'
import { Box }                        from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Layout }                     from '@ui/layout'

import { ContentMobileCourse }        from './content-mobile-course'
import { ProgramFifthDimensionProps } from './program-fifth-dimension.interfaces'

const ProgramFifthDimensionBlock: FC<ProgramFifthDimensionProps> = ({
  fifthDimensionData,
  scrollId,
}) => (
  <>
    <Row justifyContent='center' display={['none', 'none', 'flex']}>
      <CourseProgramParallax
        stepsContent={
          <StepsInformation stepsData={fifthDimensionData?.individualCourseData?.process?.step} />
        }
      />
    </Row>
    <Row display={['flex', 'flex', 'none']}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[32, 44, 0]} />
        <Box width={[335, 480, 0]}>
          <ProgramIcon width='100%' height='auto' />
        </Box>
        <Layout flexBasis={[81, 110, 0]} />
        <ContentMobileCourse fifthDimensionData={fifthDimensionData} scrollId={scrollId} />
        <Layout flexBasis={[32, 44, 0]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  </>
)

export { ProgramFifthDimensionBlock }
