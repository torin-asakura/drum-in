import React           from 'react'
import { useIntl }     from 'react-intl'

import { Row }         from '@ui/layout'
import { Swiper }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'

import { Slide }       from './slide'
import { SlideLevel }  from './slide-with-level'

const SliderBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Row>
      <Swiper spaceBetween={40} slidesPerView='auto' grabCursor touchEventsTarget='container'>
        <SwiperSlide>
          <Slide
            title={formatMessage({
              id: 'landing_choose_course.opening_the_rhythm',
              defaultMessage: 'Открытие ритма',
            })}
            desc={formatMessage({
              id: 'landing_choose_course.main_course_of_our_school',
              defaultMessage:
                'Это основной курс нашей школы, который включает в себя 3 самостоятельных',
            })}
            price={formatMessage({
              id: 'landing_choose_course.eight_thousand_four_hundred',
              defaultMessage: '8 400 ₽/мес',
            })}
            squareRotate={-4}
            squarePositionX={2}
            squarePositionY={0}
            quantityVideoLessons={formatMessage({
              id: 'landing_choose_course.thirty_nine',
              defaultMessage: '39',
            })}
            rectangleRotate={4}
            rectanglePositionX={189}
            rectanglePositionY={10}
            quantityMonths={formatMessage({
              id: 'landing_choose_course.fifteen',
              defaultMessage: '15',
            })}
            textMonths={formatMessage({
              id: 'landing_choose_course.months',
              defaultMessage: 'месяцев',
            })}
            rectangleColor='transparentPurpleGradient'
            circlePositionX={175}
            circlePositionY={121}
            circleFirstLine={formatMessage({
              id: 'landing_choose_course.three',
              defaultMessage: '3',
            })}
            circleSecondLine={formatMessage({
              id: 'landing_choose_course.levels',
              defaultMessage: 'уровня',
            })}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideLevel
            title={formatMessage({
              id: 'landing_choose_course.sense_of_time',
              defaultMessage: 'Ощущение времени',
            })}
            level={formatMessage({
              id: 'landing_choose_course.level_one',
              defaultMessage: 'Уровень 1',
            })}
            desc={formatMessage({
              id: 'landing_choose_course.basic_course_that_will_give_you_the_first_push',
              defaultMessage:
                'Базовый курс, который даст вам первый толчок к профессиональному росту',
            })}
            price={formatMessage({
              id: 'landing_choose_course.eight_thousand_four_hundred',
              defaultMessage: '8 400 ₽/мес',
            })}
            squareRotate={10}
            squarePositionX={370}
            squarePositionY={20}
            quantityVideoLessons={formatMessage({
              id: 'landing_choose_course.thirteens',
              defaultMessage: '13',
            })}
            rectangleRotate={-8}
            rectanglePositionX={10}
            rectanglePositionY={140}
            quantityMonths={formatMessage({
              id: 'landing_choose_course.fifth',
              defaultMessage: '5',
            })}
            textMonths={formatMessage({
              id: 'landing_choose_course.months',
              defaultMessage: 'месяцев',
            })}
            rectangleColor='transparentBlueGradient'
            circlePositionX={203}
            circlePositionY={0}
            circleFirstLine={formatMessage({
              id: 'landing_choose_course.twenty',
              defaultMessage: '20',
            })}
            circleSecondLine={formatMessage({
              id: 'landing_choose_course.live_broadcasts',
              defaultMessage: 'прямых эфиров',
            })}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title={formatMessage({
              id: 'landing_choose_course.opening_the_rhythm',
              defaultMessage: 'Открытие ритма',
            })}
            desc={formatMessage({
              id: 'landing_choose_course.main_course_of_our_school',
              defaultMessage:
                'Это основной курс нашей школы, который включает в себя 3 самостоятельных',
            })}
            price={formatMessage({
              id: 'landing_choose_course.eight_thousand_four_hundred',
              defaultMessage: '8 400 ₽/мес',
            })}
            squareRotate={-4}
            squarePositionX={2}
            squarePositionY={0}
            quantityVideoLessons={formatMessage({
              id: 'landing_choose_course.thirty_nine',
              defaultMessage: '39',
            })}
            rectangleRotate={4}
            rectanglePositionX={189}
            rectanglePositionY={10}
            quantityMonths={formatMessage({
              id: 'landing_choose_course.fifteen',
              defaultMessage: '15',
            })}
            textMonths={formatMessage({
              id: 'landing_choose_course.months',
              defaultMessage: 'месяцев',
            })}
            rectangleColor='transparentPurpleGradient'
            circlePositionX={175}
            circlePositionY={121}
            circleFirstLine={formatMessage({
              id: 'landing_choose_course.three',
              defaultMessage: '3',
            })}
            circleSecondLine={formatMessage({
              id: 'landing_choose_course.levels',
              defaultMessage: 'уровня',
            })}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title={formatMessage({
              id: 'landing_choose_course.opening_the_rhythm',
              defaultMessage: 'Открытие ритма',
            })}
            desc={formatMessage({
              id: 'landing_choose_course.main_course_of_our_school',
              defaultMessage:
                'Это основной курс нашей школы, который включает в себя 3 самостоятельных',
            })}
            price={formatMessage({
              id: 'landing_choose_course.eight_thousand_four_hundred',
              defaultMessage: '8 400 ₽/мес',
            })}
            squareRotate={-4}
            squarePositionX={2}
            squarePositionY={0}
            quantityVideoLessons={formatMessage({
              id: 'landing_choose_course.thirty_nine',
              defaultMessage: '39',
            })}
            rectangleRotate={4}
            rectanglePositionX={189}
            rectanglePositionY={10}
            quantityMonths={formatMessage({
              id: 'landing_choose_course.fifteen',
              defaultMessage: '15',
            })}
            textMonths={formatMessage({
              id: 'landing_choose_course.months',
              defaultMessage: 'месяцев',
            })}
            rectangleColor='transparentPurpleGradient'
            circlePositionX={175}
            circlePositionY={121}
            circleFirstLine={formatMessage({
              id: 'landing_choose_course.three',
              defaultMessage: '3',
            })}
            circleSecondLine={formatMessage({
              id: 'landing_choose_course.levels',
              defaultMessage: 'уровня',
            })}
          />
        </SwiperSlide>
      </Swiper>
    </Row>
  )
}

export { SliderBlock }
