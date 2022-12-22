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

const DesktopSliderBlock = () => {
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
    <Slider clName='choose-courses-slider' spaceBetween={40} slidesPerView='auto'>
      {Children.map(coursesChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}

export { DesktopSliderBlock }
