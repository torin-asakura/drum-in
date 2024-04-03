import React                       from 'react'
import { Children }                from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import { useMemo }                 from 'react'
import { useIntl }                 from 'react-intl'

import { CourseID }                from '@globals/data'
import { Layout }                  from '@ui/layout'
import { Slider }                  from '@ui/slider'
import { SwiperSlide }             from '@ui/slider'

import { Slide }                   from '../slide'
import { DesktopSliderBlockProps } from './desktop-slider.interfaces'
import { MainCourse }              from './main-course'
import { getUi }                   from '../../helpers'

const DesktopSliderBlock: FC<DesktopSliderBlockProps> = ({ chooseCourseData }) => {
  const individualCourses = chooseCourseData?.courses?.filter(
    (el) => el?.course?.nodes[0].id !== CourseID.OPENING_RHYTHM
  )
  const mainCourse = chooseCourseData?.courses?.find(
    (el) => el?.course?.nodes[0].id === CourseID.OPENING_RHYTHM
  )
  const { formatMessage } = useIntl()

  const coursesChildren = useMemo(
    () =>
      individualCourses?.map((item) => {
        if (item?.course?.nodes?.[0] && 'individualCourseData' in item.course.nodes[0]) {
          const element = item?.course?.nodes?.[0]?.individualCourseData?.price
          const id = item?.course?.nodes[0].id

          const getCircleSecondLine = (el) => {
            const liveBroadcastCount = el.liveTrainingsNumber
            if (el.liveTrainingsNumber === null) {
              return null
            }
            return (
              <FormattedMessage
                id='course.price.plural_format_live_broadcast'
                values={{ liveBroadcastCount }}
              />
            )
          }

          return (
            <>
              <Slide
                title={item?.course?.nodes[0].title}
                level={
                  element?.level
                    ? `${formatMessage({ id: 'course.price.course_level' })} ${element?.level}`
                    : undefined
                }
                desc={item?.description}
                price={`${element?.monthlyPrice} ${formatMessage({
                  id: 'landing_price.rubles_per_month',
                })}`}
                squareRotate={getUi(id).squareRotate}
                squarePositionX={getUi(id).squarePositionX}
                squarePositionY={getUi(id).squarePositionY}
                quantityVideoLessons={element?.videoTrainingsNumber}
                rectangleRotate={getUi(id).rectangleRotate}
                rectanglePositionX={getUi(id).rectanglePositionX}
                rectanglePositionY={getUi(id).rectanglePositionY}
                quantityMonths={element?.courseLengthInMonths}
                rectangleColor={getUi(id).rectangleColor}
                circlePositionX={getUi(id).circlePositionX}
                circlePositionY={getUi(id).circlePositionY}
                circleFirstLine={element?.liveTrainingsNumber}
                circleSecondLine={element?.bonuses || getCircleSecondLine(element)}
                link={item?.course?.nodes[0]?.individualCourseData?.path}
              />
              <Layout flexBasis={40} flexShrink={0} />
            </>
          )
        }
        return null
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [individualCourses]
  )

  return (
    <Slider
      clName='choose-courses-slider'
      spaceBetween={40}
      slidesPerView='auto'
      slidesOffsetAfter={40}
      slidesOffsetBefore={40}
      mousewheel
      grabCursor
      forceToAxis
    >
      <SwiperSlide>
        <MainCourse mainCourse={mainCourse} />
      </SwiperSlide>
      {Children.map(coursesChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}

export { DesktopSliderBlock }
