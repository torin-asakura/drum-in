import { CourseID } from '@globals/data'
import { memo }     from 'react'
import React        from 'react'

import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'
import {Row,Layout} from '@ui/layout'
import { Slide }          from '../../slide'
import { getUi }          from '../../../helpers'

export const MainCourse = memo(({mainCourse}) => {
  const {formatMessage} = useIntl()
  const courseData = mainCourse.course.nodes[0]
  const countLevel = courseData.content.price.details.levelsNumber

  return(
    <Slide
      title={courseData.title}
      level={courseData.level? `${formatMessage({id:'course.price.course_level'})} ${courseData.level.level}` : undefined}
      desc={mainCourse.description}
      price={`${courseData.content.price.priceMonthly} ${formatMessage({id:"landing_price.rubles_per_month"})}`}
      squareRotate={getUi(courseData.id).squareRotate}
      squarePositionX={getUi(courseData.id).squarePositionX}
      squarePositionY={getUi(courseData.id).squarePositionY}
      quantityVideoLessons={courseData.content.price.details.videoTrainingsNumber}
      rectangleRotate={getUi(courseData.id).rectangleRotate}
      rectanglePositionX={getUi(courseData.id).rectanglePositionX}
      rectanglePositionY={getUi(courseData.id).rectanglePositionY}
      quantityMonths={courseData.content.price.details.monthsNumber}
      rectangleColor={getUi(courseData.id).rectangleColor}
      circlePositionX={getUi(courseData.id).circlePositionX}
      circlePositionY={getUi(courseData.id).circlePositionY}
      circleFirstLine={courseData.content.price.details.levelsNumber}
      circleSecondLine={<FormattedMessage id='course.price.plural_format_level' values={{countLevel}}/>}
      link={courseData.content.path}
    />
  )
})
