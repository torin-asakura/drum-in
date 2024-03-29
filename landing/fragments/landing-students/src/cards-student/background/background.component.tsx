import React           from 'react'

import { Background }  from '@ui/background'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout/src'
import { Slider }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'

const BackgroundBlock = () => (
  <Box display={['none', 'none', 'flex']} position='relative' height={130} overflow='hidden'>
    <Layout flexBasis={40} flexShrink={0} />
    <Slider
      clName='students-slider-desktop'
      spaceBetween={40}
      slidesPerView='auto'
      allowTouchMove={false}
    >
      <SwiperSlide>
        <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
      </SwiperSlide>
      <SwiperSlide>
        <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
      </SwiperSlide>
      <SwiperSlide>
        <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
      </SwiperSlide>
      <SwiperSlide>
        <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
      </SwiperSlide>
    </Slider>
    <Background
      position='absolute'
      width='100%'
      height='100%'
      left={0}
      bottom={0}
      gradient='verticalTransparentToBlackGradient'
    />
  </Box>
)
export { BackgroundBlock }
