import React              from 'react'
import { Children }       from 'react'
import { useMemo }        from 'react'

import { Condition }      from '@ui/condition'
import { Slider }         from '@ui/slider'
import { SwiperSlide }    from '@ui/slider'

import { Slide }          from '../slide'
import { useChoseCourse } from '../../data'
import { getUi }          from '../../helpers'

const MobileSliderBlock = () => {
  const choseCourseData = useChoseCourse()

  const coursesChildren = useMemo(
    () =>
      choseCourseData?.map(({ id, title, choseCourse }) => (
        <Slide
          title={title}
          level={choseCourse.level}
          desc={choseCourse.description}
          price={choseCourse.price}
          squareRotate={getUi(id).squareRotateMobile}
          squarePositionX={getUi(id).squarePositionXMobile}
          squarePositionY={getUi(id).squarePositionYMobile}
          quantityVideoLessons={choseCourse.quantityVideoLessons}
          rectangleRotate={getUi(id).rectangleRotateMobile}
          rectanglePositionX={getUi(id).rectanglePositionXMobile}
          rectanglePositionY={getUi(id).rectanglePositionYMobile}
          quantityMonths={choseCourse.quantityMonths}
          textMonths={choseCourse.textMonths}
          rectangleColor={getUi(id).rectangleColor}
          circlePositionX={getUi(id).circlePositionXMobile}
          circlePositionY={getUi(id).circlePositionYMobile}
          circleFirstLine={choseCourse.circleFirstLine}
          circleSecondLine={choseCourse.circleSecondLine}
          link={choseCourse.link}
        />
      )),
    [choseCourseData]
  )

  return (
    <Condition match={choseCourseData !== [] && choseCourseData !== undefined}>
      <Slider
        clName='choose-courses-slider'
        spaceBetween={16}
        slidesPerView='auto'
        progressbar
        autoHeight
      >
        {Children.map(coursesChildren, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Slider>
    </Condition>
  )
}

export { MobileSliderBlock }
