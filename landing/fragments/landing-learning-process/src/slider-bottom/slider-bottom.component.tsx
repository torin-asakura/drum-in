import React           from 'react'
import { Mousewheel }  from 'swiper'
import { Pagination }  from 'swiper'
import { useIntl }     from 'react-intl'

import { Swiper }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'

import { SlideImage }  from '../slide-image'
import { SlideText }   from '../slide-text'

const SliderBottom = () => {
  const { formatMessage } = useIntl()

  return (
    <Swiper
      slidesPerView='auto'
      className='learning-process-slider'
      centeredSlides
      spaceBetween={40}
      mousewheel={{ eventsTarget: 'body' }}
      modules={[Mousewheel, Pagination]}
      speed={500}
      allowTouchMove={false}
      loop
    >
      <SwiperSlide>
        <SlideImage pathImage='/img/img-3-learning-process.png' />
      </SwiperSlide>
      <SwiperSlide>
        <SlideText
          text={formatMessage({
            id: 'landing_learning_process.personal_control_of_task_completion',
            defaultMessage: 'Личный контроль выполнения заданий',
          })}
          activeIcons='target'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage pathImage='/img/img-4-learning-process.png' />
      </SwiperSlide>
      <SwiperSlide>
        <SlideText
          text={formatMessage({
            id: 'landing_learning_process.analysis_of_compositions_and_parties_of_different_styles',
            defaultMessage: 'Разбор композиций и партий разных стилей',
          })}
          activeIcons='sheetMusic'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage pathImage='/img/img-5-learning-process.png' />
      </SwiperSlide>
    </Swiper>
  )
}
export { SliderBottom }
