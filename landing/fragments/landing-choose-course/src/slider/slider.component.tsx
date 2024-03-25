import React                  from 'react'

import { Row }                from '@ui/layout'

import { DesktopSliderBlock } from './desktop-slider'
import { MobileSliderBlock }  from './mobile-slider'

const SliderBlock = ({mainPageData}) => (
  <>
    <Row display={['none', 'flex', 'flex']}>
      <DesktopSliderBlock mainPageData={mainPageData}/>
    </Row>
    <Row display={['flex', 'none', 'none']}>
      <MobileSliderBlock mainPageData={mainPageData}/>
    </Row>
  </>
)

export { SliderBlock }
