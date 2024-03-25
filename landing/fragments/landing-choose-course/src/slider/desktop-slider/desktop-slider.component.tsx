import { CourseID } from '@globals/data'
import React        from 'react'
import { Children } from 'react'
import { Slider }           from '@ui/slider'
import { SwiperSlide }      from '@ui/slider'
import {Row,Layout}         from '@ui/layout'
import {MainCourse}         from './main-course'
import {IndividualCourses} from './individual-courses'



const DesktopSliderBlock = ({mainPageData}) => {

  const individualCourseData = mainPageData.chooseCourse.courses.filter(el => el.course.nodes[0].id !== CourseID.OPENING_RHYTHM)
  const mainCourseData = mainPageData.chooseCourse.courses.find(el => el.course.nodes[0].id === CourseID.OPENING_RHYTHM)

  const coursesChildren = () => (
      <Row>
        <MainCourse mainCourse={mainCourseData}/>
        <Layout flexBasis={40} flexShrink={0}/>
        <IndividualCourses individualCourses={individualCourseData}/>
      </Row>
  )

  return (
      <Slider
        clName='choose-courses-slider'
        spaceBetween={0}
        slidesPerView='auto'
        slidesOffsetAfter={240}
        slidesOffsetBefore={40}
        mousewheel
        grabCursor
        forceToAxis
      >
        {Children.map(coursesChildren(), (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Slider>
  )
}

export { DesktopSliderBlock }
