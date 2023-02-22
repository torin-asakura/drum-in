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
import { getUi }               from '../../helpers'

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
        quantityVideoLessons,
        circleFirstLine,
        circleSecondLine,
        quantityMonths,
        textMonths,
        itemId,
      }) => (
        <Slide
          title={title}
          level={level}
          desc={desc}
          price={price}
          squareRotate={getUi(itemId).squareRotate}
          squarePositionX={getUi(itemId).squarePositionX}
          squarePositionY={getUi(itemId).squarePositionY}
          quantityVideoLessons={quantityVideoLessons}
          rectangleRotate={getUi(itemId).rectangleRotate}
          rectanglePositionX={getUi(itemId).rectanglePositionX}
          rectanglePositionY={getUi(itemId).rectanglePositionY}
          quantityMonths={quantityMonths}
          textMonths={textMonths}
          rectangleColor={getUi(itemId).rectangleColor}
          circlePositionX={getUi(itemId).circlePositionX}
          circlePositionY={getUi(itemId).circlePositionY}
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
