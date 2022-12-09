import React              from 'react'

import { DrumsticksIcon } from '@ui/icons'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Swiper }         from '@ui/slider'
import { SwiperSlide }    from '@ui/slider'

import { Slide }          from './slide'

const SliderBlock = () => (
  <>
    <Box position='relative' display={['none', 'none', 'flex']}>
      <Box position='absolute' top={-30} right={200}>
        <DrumsticksIcon width={182} height={182} />
      </Box>
      <Swiper
        slidesPerView='auto'
        className='teacher-slider'
        centeredSlides
        spaceBetween={197}
        loop
        grabCursor
      >
        <SwiperSlide>
          <Slide pathImage='/img/img-2-teacher-block.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide pathImage='/img/img-3-teacher-block.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide pathImage='/img/img-4-teacher-block.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide pathImage='/img/img-1-teacher-block.png' />
        </SwiperSlide>
      </Swiper>
    </Box>
    <Box display={['flex', 'flex', 'none']}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Swiper slidesPerView='auto' className='teacher-slider' spaceBetween={20} loop>
        <SwiperSlide>
          <Slide pathImage='/img/img-2-teacher-block.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide pathImage='/img/img-3-teacher-block.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide pathImage='/img/img-4-teacher-block.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide pathImage='/img/img-1-teacher-block.png' />
        </SwiperSlide>
      </Swiper>
    </Box>
  </>
)

export { SliderBlock }
