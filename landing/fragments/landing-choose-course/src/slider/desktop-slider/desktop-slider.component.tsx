import React           from 'react'
import { useIntl }     from 'react-intl'

import { Swiper }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'

import { Slide }       from '../slide'
import { SlideLevel }  from '../slide-with-level'

const DesktopSliderBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Swiper
      className='choose-courses-slider'
      spaceBetween={40}
      slidesPerView='auto'
      grabCursor
      touchEventsTarget='container'
      loop
    >
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
          squarePositionY={2}
          quantityVideoLessons={formatMessage({
            id: 'landing_choose_course.thirty_nine',
            defaultMessage: '39',
          })}
          rectangleRotate={4}
          rectanglePositionX={193}
          rectanglePositionY={11}
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
          squarePositionX={389}
          squarePositionY={29}
          quantityVideoLessons={formatMessage({
            id: 'landing_choose_course.thirteens',
            defaultMessage: '13',
          })}
          rectangleRotate={-8}
          rectanglePositionX={2}
          rectanglePositionY={172}
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
        <SlideLevel
          title={formatMessage({
            id: 'landing_choose_course.fifth_dimension',
            defaultMessage: 'Пятое измрение',
          })}
          level={formatMessage({
            id: 'landing_choose_course.level_two',
            defaultMessage: 'Уровень 2',
          })}
          desc={formatMessage({
            id: 'landing_choose_course.course_is_for_amateurs_who_want_to_improve',
            defaultMessage: 'Курс для любителей, которые хотят усовершенствовать своё мастерство',
          })}
          price={formatMessage({
            id: 'landing_choose_course.eight_thousand_four_hundred',
            defaultMessage: '8 400 ₽/мес',
          })}
          squareRotate={0}
          squarePositionX={400}
          squarePositionY={0}
          quantityVideoLessons={formatMessage({
            id: 'landing_choose_course.thirteens',
            defaultMessage: '13',
          })}
          rectangleRotate={-15}
          rectanglePositionX={36}
          rectanglePositionY={35}
          quantityMonths={formatMessage({
            id: 'landing_choose_course.fifth',
            defaultMessage: '5',
          })}
          textMonths={formatMessage({
            id: 'landing_choose_course.months',
            defaultMessage: 'месяцев',
          })}
          rectangleColor='transparentGreenGradient'
          circlePositionX={0}
          circlePositionY={113}
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
        <SlideLevel
          title={formatMessage({
            id: 'landing_choose_course.seventh_heaven',
            defaultMessage: 'Седьмое небо',
          })}
          level={formatMessage({
            id: 'landing_choose_course.level_three',
            defaultMessage: 'Уровень 3',
          })}
          desc={formatMessage({
            id: 'landing_choose_course.course_is_for_experienced_musicians_who_want',
            defaultMessage:
              'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
          })}
          price={formatMessage({
            id: 'landing_choose_course.eight_thousand_four_hundred',
            defaultMessage: '8 400 ₽/мес',
          })}
          squareRotate={0}
          squarePositionX={184}
          squarePositionY={139}
          quantityVideoLessons={formatMessage({
            id: 'landing_choose_course.thirteens',
            defaultMessage: '13',
          })}
          rectangleRotate={-15}
          rectanglePositionX={215}
          rectanglePositionY={42}
          quantityMonths={formatMessage({
            id: 'landing_choose_course.fifth',
            defaultMessage: '5',
          })}
          textMonths={formatMessage({
            id: 'landing_choose_course.months',
            defaultMessage: 'месяцев',
          })}
          rectangleColor='transparentPinkGradient'
          circlePositionX={28}
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
            id: 'landing_choose_course.connacol',
            defaultMessage: 'Коннакол',
          })}
          desc={formatMessage({
            id: 'landing_choose_course.course_on_the_indian_rhythm_system',
            defaultMessage:
              'Курс по индийской системе ритма и одной из древнейших музыкальных традиций',
          })}
          price={formatMessage({
            id: 'landing_choose_course.eight_thousand_four_hundred',
            defaultMessage: '8 400 ₽/мес',
          })}
          squareRotate={15}
          squarePositionX={385}
          squarePositionY={99}
          quantityVideoLessons={formatMessage({
            id: 'landing_choose_course.sixth',
            defaultMessage: '6',
          })}
          rectangleRotate={-15}
          rectanglePositionX={0}
          rectanglePositionY={158}
          quantityMonths={formatMessage({
            id: 'landing_choose_course.fourth',
            defaultMessage: '4',
          })}
          textMonths={formatMessage({
            id: 'landing_choose_course.months_with_different_ending',
            defaultMessage: 'месяца',
          })}
          rectangleColor='transparentPurpleGradient'
          circlePositionX={203}
          circlePositionY={0}
          circleSecondLine={formatMessage({
            id: 'landing_choose_course.bonus_module',
            defaultMessage: 'бонус-модуль',
          })}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title={formatMessage({
            id: 'landing_choose_course.polyrhythmic_keys',
            defaultMessage: 'Ключи полиритмии',
          })}
          desc={formatMessage({
            id: 'landing_choose_course.short_course_for_those_who_are_interested',
            defaultMessage: 'Короткий курс для тех, кому интересно углубиться в полиритмию.',
          })}
          price={formatMessage({
            id: 'landing_choose_course.eight_thousand_four_hundred',
            defaultMessage: '8 400 ₽/мес',
          })}
          squareRotate={0}
          squarePositionX={27}
          squarePositionY={0}
          quantityVideoLessons={formatMessage({
            id: 'landing_choose_course.fifth',
            defaultMessage: '5',
          })}
          rectangleRotate={10}
          rectanglePositionX={211}
          rectanglePositionY={29}
          quantityMonths={formatMessage({
            id: 'landing_choose_course.thirst',
            defaultMessage: '1',
          })}
          textMonths={formatMessage({
            id: 'landing_choose_course.month',
            defaultMessage: 'месяц',
          })}
          rectangleColor='transparentPurpleGradient'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export { DesktopSliderBlock }
