import React                   from 'react'

import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'
import { useProcessEducation } from '@globals/data/src'

import { DesktopSlider }       from './desktop-slider'
import { MobileSlider }        from './mobile-slider'

const CourseProcessBlock = () => {
  const { processEducationData } = useProcessEducation()

  return (
    <Row justifyContent='center' flexWrap='wrap'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column>
          <Layout flexBasis={[48, 68, 90]} />
          <Box width={['100%', 400, 800]}>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'moderate', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {processEducationData?.title}
            </Text>
          </Box>
          <Layout flexBasis={[24, 40, 80, 101]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
      <DesktopSlider processEducation={processEducationData} />
      <MobileSlider processEducation={processEducationData} />
    </Row>
  )
}

export { CourseProcessBlock }
