import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { memo }             from 'react'
import { useIntl }          from 'react-intl'

import { Layout }           from '@ui/layout'

import { Slide }            from '../../slide'
import { getUi }            from '../../../helpers'

export const IndividualCourses = memo(({ individualCourses }) => {
  const { formatMessage } = useIntl()

  return individualCourses?.map((item) => {
    const element = item.course.nodes[0].individualCourseData.price
    const id = item.course.nodes[0].id

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
          title={item.course.nodes[0].title}
          level={
            element.level
              ? `${formatMessage({ id: 'course.price.course_level' })} ${element.level}`
              : undefined
          }
          desc={item.description}
          price={`${element.monthlyPrice} ${formatMessage({
            id: 'landing_price.rubles_per_month',
          })}`}
          squareRotate={getUi(id).squareRotateMobile}
          squarePositionX={getUi(id).squarePositionXMobile}
          squarePositionY={getUi(id).squarePositionYMobile}
          quantityVideoLessons={element.videoTrainingsNumber}
          rectangleRotate={getUi(id).rectangleRotateMobile}
          rectanglePositionX={getUi(id).rectanglePositionXMobile}
          rectanglePositionY={getUi(id).rectanglePositionYMobile}
          quantityMonths={element.courseLengthInMonths}
          rectangleColor={getUi(id).rectangleColor}
          circlePositionX={getUi(id).circlePositionXMobile}
          circlePositionY={getUi(id).circlePositionYMobile}
          circleFirstLine={element.liveTrainingsNumber}
          circleSecondLine={element.bonuses || getCircleSecondLine(element)}
          link={item.course.nodes[0].individualCourseData.path}
        />
        <Layout flexBasis={40} flexShrink={0} />
      </>
    )
  })
})
