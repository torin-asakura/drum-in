import React                  from 'react'

import { Row }                from '@ui/layout'

import { DesktopSliderBlock } from './desktop-slider'
import { MobileSliderBlock }  from './mobile-slider'

const SliderBlock = () => (
  <>
    <Row display={['none', 'flex', 'flex']}>
      <DesktopSliderBlock />
    </Row>
    <Row display={['flex', 'none', 'none']}>
      <MobileSliderBlock />
    </Row>
  </>
)

export { SliderBlock }
