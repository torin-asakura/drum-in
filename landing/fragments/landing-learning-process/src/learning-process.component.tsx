import React                  from 'react'
import { forwardRef }         from 'react'

import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { SliderBottom }       from './slider-bottom'
import { SliderTop }          from './slider-top'
import { useLearningProcess } from './data'

const LearningProcessBlock = forwardRef(({learningProcessData, data }: any, ref: any) => {

  return (
    <Box
      width='100%'
      ref={ref}
      id='learning-process'
      position='relative'
      display='block'
      data-scroll-position='bottom'
    >
      <Row justifyContent='center'>
        <Box width={['100%', '100%', 1920]}>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          <Column>
            <Layout flexBasis={[64, 79, 94]} />
            <Box width={['100%', '100%', 800]}>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={['regular', 'mild', 'big']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                {learningProcessData?.title}
              </Text>
            </Box>
            <Layout flexBasis={[24, 46, 68]} />
          </Column>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        </Box>
      </Row>
      <Box>
        <Column>
          <SliderTop upperSliderData={learningProcessData.upperslider}/>
          <Layout flexBasis={[16, 28, 40]} />
          <SliderBottom lowerSliderData={learningProcessData.lowerslider}/>
          <Layout flexBasis={[64, 77, 90]} />
        </Column>
      </Box>
    </Box>
  )
})
export { LearningProcessBlock }
