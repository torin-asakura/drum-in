import React                   from 'react'
import { Children }            from 'react'
import { Pagination }          from 'swiper'
import { useMemo }             from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Courses as CCourses } from '@shared/data'
import { Swiper }              from '@ui/slider'
import { SwiperSlide }         from '@ui/slider'
import { useMockedCourses }    from '@shared/data'

import { Slide }                from '../slide'

const MobileSliderBlock = () => {
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
        squareRotateMobile,
        squarePositionXMobile,
        squarePositionYMobile,
        quantityVideoLessons,
        circlePositionXMobile,
        circlePositionYMobile,
        circleFirstLine,
        circleSecondLine,
        rectangleRotateMobile,
        rectanglePositionXMobile,
        rectanglePositionYMobile,
        quantityMonths,
        textMonths,
        rectangleColor,
      }) => (
        <Slide
          title={title}
          level={level}
          desc={desc}
          price={price}
          squareRotate={squareRotateMobile}
          squarePositionX={squarePositionXMobile}
          squarePositionY={squarePositionYMobile}
          quantityVideoLessons={quantityVideoLessons}
          rectangleRotate={rectangleRotateMobile}
          rectanglePositionX={rectanglePositionXMobile}
          rectanglePositionY={rectanglePositionYMobile}
          quantityMonths={quantityMonths}
          textMonths={textMonths}
          rectangleColor={rectangleColor}
          circlePositionX={circlePositionXMobile}
          circlePositionY={circlePositionYMobile}
          circleFirstLine={circleFirstLine}
          circleSecondLine={circleSecondLine}
        />
      )),
    [courses]
  )

  return (
    <Swiper
      className='choose-courses-slider'
      spaceBetween={16}
      slidesPerView='auto'
      pagination={{ type: 'progressbar' }}
      modules={[Pagination]}
      touchEventsTarget='container'
      autoHeight
      loop
    >
      {Children.map(coursesChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export { MobileSliderBlock }
