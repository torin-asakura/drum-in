import React                      from 'react'
import { Mousewheel }             from 'swiper'
import { Pagination } from 'swiper'
import { useIntl }                from 'react-intl'

import { Swiper }                 from '@ui/slider'
import { SwiperSlide }            from '@ui/slider'

import { SlideImage }             from '../slide-image'
import { SlideText }              from '../slide-text'

const SliderTop = () => {
  const { formatMessage } = useIntl()

  return (
    <Swiper
      slidesPerView='auto'
      className='learning-process-slider'
      spaceBetween={40}
      mousewheel={{ eventsTarget: 'body', invert: true }}
      modules={[Mousewheel, Pagination]}
      speed={500}
      allowTouchMove={false}
      loop
    >
      <SwiperSlide>
        <SlideText
          text={formatMessage({
            id: 'landing_learning_process.practical_video_tasks',
            defaultMessage: 'Практические видео-задания',
          })}
          activeIcons='sheetMusic'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage pathImage='/img/img-1-learning-process.png' />
      </SwiperSlide>
      <SwiperSlide>
        <SlideText
          text={formatMessage({
            id: 'landing_learning_process.weekly_online_group_classes',
            defaultMessage: 'Еженедельные групповые онлайн-занятия',
          })}
          activeIcons='target'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage pathImage='/img/img-2-learning-process.png' />
      </SwiperSlide>
    </Swiper>
  )
}
export { SliderTop }
