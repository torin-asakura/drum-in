import React                      from 'react'
import { Children }               from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'
import { useMemo }                from 'react'
import { useIntl }                from 'react-intl'

import { CourseID }               from '@globals/data/src'
import { Box }                    from '@ui/layout/src'
import { Layout }                 from '@ui/layout/src'
import { Slider }                 from '@ui/slider'
import { SwiperSlide }            from '@ui/slider'

import { Slide }                  from '../slide'
import { MainCourse }             from './main-course'
import { MobileSliderBlockProps } from './mobile-slider.interfaces'
import { getUi }                  from '../../helpers'

const MobileSliderBlock: FC<MobileSliderBlockProps> = ({ chooseCourseData }) => {
  const individualCourses = chooseCourseData?.courses?.filter(
    (el) => el?.course?.nodes[0].id !== CourseID.OPENING_RHYTHM
  )
  const mainCourseData = chooseCourseData?.courses?.find(
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
                    ? `${formatMessage({ id: 'course.price.course_level' })} ${element.level}`
                    : undefined
                }
                desc={item?.description}
                price={`${element?.monthlyPrice} ${formatMessage({
                  id: 'landing_price.rubles_per_month',
                })}`}
                squareRotate={getUi(id).squareRotateMobile}
                squarePositionX={getUi(id).squarePositionXMobile}
                squarePositionY={getUi(id).squarePositionYMobile}
                quantityVideoLessons={element?.videoTrainingsNumber}
                rectangleRotate={getUi(id).rectangleRotateMobile}
                rectanglePositionX={getUi(id).rectanglePositionXMobile}
                rectanglePositionY={getUi(id).rectanglePositionYMobile}
                quantityMonths={element?.courseLengthInMonths}
                rectangleColor={getUi(id).rectangleColor}
                circlePositionX={getUi(id).circlePositionXMobile}
                circlePositionY={getUi(id).circlePositionYMobile}
                circleFirstLine={element?.liveTrainingsNumber}
                circleSecondLine={element?.bonuses || getCircleSecondLine(element)}
                link={item?.course?.nodes[0].individualCourseData?.path}
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
    <Box>
      <Slider
        clName='choose-courses-slider'
        spaceBetween={20}
        slidesPerView='auto'
        autoHeight
        slidesOffsetAfter={20}
        slidesOffsetBefore={20}
      >
        <SwiperSlide>
          <MainCourse mainCourseData={mainCourseData} />
        </SwiperSlide>
        {Children.map(coursesChildren, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Slider>
    </Box>
  )
}

export { MobileSliderBlock }
