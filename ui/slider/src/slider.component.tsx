import { Swiper }      from '@atls-ui-parts/swiper'

import React           from 'react'
import { FC }          from 'react'
import { Pagination }  from 'swiper'
import { Mousewheel }  from 'swiper'

import { SliderProps } from './slider.interfaces'

const Slider: FC<SliderProps> = ({
  clName,
  spaceBetween,
  slidesPerView,
  grabCursor,
  loop,
  autoHeight,
  progressbar,
  centeredSlides,
  speed = 300,
  allowTouchMove = true,
  mousewheel,
  slidesOffsetAfter = 0,
  mousewheelInvert,
  children,
}) => {
  if (mousewheel) {
    return (
      <Swiper
        className={clName}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        grabCursor={!!grabCursor}
        touchEventsTarget='container'
        loop={!!loop}
        autoHeight={!!autoHeight}
        centeredSlides={!!centeredSlides}
        pagination={progressbar ? { type: 'progressbar' } : false}
        mousewheel={mousewheel ? { eventsTarget: 'body', invert: mousewheelInvert } : false}
        modules={progressbar ? [Pagination, Mousewheel] : [Mousewheel]}
        speed={speed}
        allowTouchMove={allowTouchMove}
        slidesOffsetAfter={slidesOffsetAfter}
      >
        {children}
      </Swiper>
    )
  }

  return (
    <Swiper
      className={clName}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      grabCursor={!!grabCursor}
      touchEventsTarget='container'
      loop={!!loop}
      autoHeight={!!autoHeight}
      centeredSlides={!!centeredSlides}
      pagination={progressbar ? { type: 'progressbar' } : false}
      modules={progressbar ? [Pagination] : []}
      speed={speed}
      allowTouchMove={allowTouchMove}
      slidesOffsetAfter={slidesOffsetAfter}
    >
      {children}
    </Swiper>
  )
}

export { Slider }
