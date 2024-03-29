import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { memo }             from 'react'
import { useIntl }          from 'react-intl'

import { Slide }            from '../../slide'
import { getUi }            from '../../../helpers'

export const MainCourse = memo(({ mainCourse }) => {
  const { formatMessage } = useIntl()
  const courseData = mainCourse.course.nodes[0]
  const countLevel = courseData.content.price.details.levelsNumber

  return (
    <Slide
      title={courseData.title}
      level={
        courseData.level
          ? `${formatMessage({ id: 'course.price.course_level' })} ${courseData.level.level}`
          : undefined
      }
      desc={mainCourse.description}
      price={`${courseData.content.price.priceMonthly} ${formatMessage({
        id: 'landing_price.rubles_per_month',
      })}`}
      link={courseData.content.path}
      squareRotate={getUi(courseData.id).squareRotateMobile}
      squarePositionX={getUi(courseData.id).squarePositionXMobile}
      squarePositionY={getUi(courseData.id).squarePositionYMobile}
      quantityVideoLessons={courseData.content.price.details.videoTrainingsNumber}
      rectangleRotate={getUi(courseData.id).rectangleRotateMobile}
      rectanglePositionX={getUi(courseData.id).rectanglePositionXMobile}
      rectanglePositionY={getUi(courseData.id).rectanglePositionYMobile}
      quantityMonths={courseData.content.price.details.monthsNumber}
      rectangleColor={getUi(courseData.id).rectangleColor}
      circlePositionX={getUi(courseData.id).circlePositionXMobile}
      circlePositionY={getUi(courseData.id).circlePositionYMobile}
      circleFirstLine={courseData.content.price.details.levelsNumber}
      circleSecondLine={
        <FormattedMessage id='course.price.plural_format_level' values={{ countLevel }} />
      }
    />
  )
})
