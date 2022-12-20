import { Swiper } from '@atls-ui-parts/swiper'

import React      from 'react'

const Slider = ({ clName, children }) => (
  <Swiper
    className={clName}
    spaceBetween={40}
    slidesPerView='auto'
    grabCursor
    touchEventsTarget='container'
    loop
  >
    {children}
  </Swiper>
)

export { Slider }
