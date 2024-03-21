import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'
import { useProcessEducation } from '@globals/data'

import { DesktopSlider }       from './desktop-slider'
import { MobileSlider }        from './mobile-slider'

const CourseProcessBlock = () => {
  const { processEducation } = useProcessEducation()
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
              <FormattedMessage id='/' defaultMessage='Как проходит обучение' />
            </Text>
          </Box>
          <Layout flexBasis={[24, 60, 101]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
      <DesktopSlider processEducation={processEducation} />
      <MobileSlider processEducation={processEducation} />
    </Row>
  )
}
export { CourseProcessBlock }
