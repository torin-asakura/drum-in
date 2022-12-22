import React                   from 'react'
import { Children }            from 'react'
import { useMemo }             from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Courses as CCourses } from '@shared/data'
import { Slider }              from '@ui/slider'
import { SwiperSlide }         from '@ui/slider'
import { useMockedCourses }    from '@shared/data'

import { Slide }               from '../slide'

const MobileSliderBlock = () => {
  const { courses: coursesData } = useMockedCourses()
  const [courses, setCourses] = useState<CCourses[]>(coursesData)

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
    <Slider
      clName='choose-courses-slider'
      spaceBetween={16}
      slidesPerView='auto'
      progressbar
      autoHeight
      loop
    >
      {Children.map(coursesChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}

export { MobileSliderBlock }
