import React              from 'react'
import { Children }       from 'react'
import { useMemo }        from 'react'

import { Condition }      from '@ui/condition'
import { Slider }         from '@ui/slider'
import { SwiperSlide }    from '@ui/slider'

import { Slide }          from '../slide'
import { useChoseCourse } from '../../data'
import { getUi }          from '../../helpers'

const DesktopSliderBlock = () => {
  const choseCourseData = useChoseCourse()

  const coursesChildren = useMemo(
    () =>
      choseCourseData?.map(({ id, title, choseCourse }) => (
        <Slide
          title={title}
          level={choseCourse.level}
          desc={choseCourse.description}
          price={choseCourse.price}
          squareRotate={getUi(id).squareRotate}
          squarePositionX={getUi(id).squarePositionX}
          squarePositionY={getUi(id).squarePositionY}
          quantityVideoLessons={choseCourse.quantityVideoLessons}
          rectangleRotate={getUi(id).rectangleRotate}
          rectanglePositionX={getUi(id).rectanglePositionX}
          rectanglePositionY={getUi(id).rectanglePositionY}
          quantityMonths={choseCourse.quantityMonths}
          textMonths={choseCourse.textMonths}
          rectangleColor={getUi(id).rectangleColor}
          circlePositionX={getUi(id).circlePositionX}
          circlePositionY={getUi(id).circlePositionY}
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
        spaceBetween={40}
        slidesPerView='auto'
        slidesOffsetAfter={40}
        mousewheel={true}
        grabCursor={true}
      >
        {Children.map(coursesChildren, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Slider>
    </Condition>
  )
}

export { DesktopSliderBlock }
