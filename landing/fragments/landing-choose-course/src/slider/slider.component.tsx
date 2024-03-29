import React                  from 'react'
import { FC }                 from 'react'

import { Row }                from '@ui/layout'

import { DesktopSliderBlock } from './desktop-slider'
import { MobileSliderBlock }  from './mobile-slider'
import { SliderBlockProps }   from './slider.interfaces'

const SliderBlock: FC<SliderBlockProps> = ({ chooseCourseData }) => (
  <>
    <Row display={['none', 'flex', 'flex']}>
      <DesktopSliderBlock chooseCourseData={chooseCourseData} />
    </Row>
    <Row display={['flex', 'none', 'none']}>
      <MobileSliderBlock chooseCourseData={chooseCourseData} />
    </Row>
  </>
)

export { SliderBlock }
