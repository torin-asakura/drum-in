import React                 from 'react'
import { Children }          from 'react'

import { CourseID }          from '@globals/data/src'
import { Layout }            from '@ui/layout/src'
import { Row }               from '@ui/layout/src'
import { Slider }            from '@ui/slider'
import { SwiperSlide }       from '@ui/slider'

import { IndividualCourses } from './individual-courses'
import { MainCourse }        from './main-course'

const MobileSliderBlock = ({ mainPageData }) => {
  const individualCourseData = mainPageData.chooseCourse.courses.filter(
    (el) => el.course.nodes[0].id !== CourseID.OPENING_RHYTHM
  )
  const mainCourseData = mainPageData.chooseCourse.courses.find(
    (el) => el.course.nodes[0].id === CourseID.OPENING_RHYTHM
  )

  const coursesChildren = () => (
    <Row>
      <MainCourse mainCourse={mainCourseData} />
      <Layout flexBasis={40} flexShrink={0} />
      <IndividualCourses individualCourses={individualCourseData} />
    </Row>
  )

  return (
    <Slider
      clName='choose-courses-slider'
      spaceBetween={20}
      slidesPerView='auto'
      progressbar
      autoHeight
    >
      {Children.map(coursesChildren(), (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}

export { MobileSliderBlock }
