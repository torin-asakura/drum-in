import React                   from 'react'
import { Children }            from 'react'
import { useMemo }             from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Courses as CCourses } from '@shared/data'
import { Swiper }              from '@ui/slider'
import { SwiperSlide }         from '@ui/slider'
import { useMockedCourses }    from '@shared/data'

import { Slide }                from '../slide'

const DesktopSliderBlock = () => {
  const { courses: coursesData } = useMockedCourses()
  const [courses, setCourses] = useState<CCourses[]>([])

  useEffect(() => {
    setCourses(coursesData)
    // eslint-disable-next-line
  }, [])

  const coursesChildren = useMemo(
    () =>
      courses.map(({
        title,
        level,
        desc,
        price,
        squareRotate,
        squarePositionX,
        squarePositionY,
        quantityVideoLessons,
        circlePositionX,
        circlePositionY,
        circleFirstLine,
        circleSecondLine,
        rectangleRotate,
        rectanglePositionX,
        rectanglePositionY,
        quantityMonths,
        textMonths,
        rectangleColor,
      }) => (
        <Slide
          title={title}
          level={level}
          desc={desc}
          price={price}
          squareRotate={squareRotate}
          squarePositionX={squarePositionX}
          squarePositionY={squarePositionY}
          quantityVideoLessons={quantityVideoLessons}
          rectangleRotate={rectangleRotate}
          rectanglePositionX={rectanglePositionX}
          rectanglePositionY={rectanglePositionY}
          quantityMonths={quantityMonths}
          textMonths={textMonths}
          rectangleColor={rectangleColor}
          circlePositionX={circlePositionX}
          circlePositionY={circlePositionY}
          circleFirstLine={circleFirstLine}
          circleSecondLine={circleSecondLine}
        />
      )),
    [courses]
  )

  return (
    <Swiper
      className='choose-courses-slider'
      spaceBetween={40}
      slidesPerView='auto'
      grabCursor
      touchEventsTarget='container'
      loop
    >
      {Children.map(coursesChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export { DesktopSliderBlock }
