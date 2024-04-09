import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { memo }             from 'react'
import { useIntl }          from 'react-intl'

import { Slide }            from '../../slide'
import { MainCourseProps }  from './main-course.interfaces'
import { getUi }            from '../../../helpers'

export const MainCourse: FC<MainCourseProps> = memo(({ mainCourse }) => {
  const { formatMessage } = useIntl()
  const courseData = mainCourse?.course?.nodes[0]
  const checkMainCourse = () => {
    if (courseData && 'content' in courseData) {
      return courseData
    }
    return null
  }

  const countLevel = checkMainCourse()?.content?.price?.details?.levelsNumber

  return (
    <Slide
      title={courseData?.title}
      desc={mainCourse?.description}
      price={`${checkMainCourse()?.content?.price?.priceMonthly} ${formatMessage({
        id: 'landing_price.rubles_per_month',
      })}`}
      squareRotate={getUi(courseData?.id).squareRotate}
      squarePositionX={getUi(courseData?.id).squarePositionX}
      squarePositionY={getUi(courseData?.id).squarePositionY}
      quantityVideoLessons={checkMainCourse()?.content?.price?.details?.videoTrainingsNumber}
      rectangleRotate={getUi(courseData?.id).rectangleRotate}
      rectanglePositionX={getUi(courseData?.id).rectanglePositionX}
      rectanglePositionY={getUi(courseData?.id).rectanglePositionY}
      quantityMonths={checkMainCourse()?.content?.price?.details?.monthsNumber}
      rectangleColor={getUi(courseData?.id).rectangleColor}
      circlePositionX={getUi(courseData?.id).circlePositionX}
      circlePositionY={getUi(courseData?.id).circlePositionY}
      circleFirstLine={checkMainCourse()?.content?.price?.details?.levelsNumber}
      circleSecondLine={
        <FormattedMessage id='course.price.plural_format_level' values={{ countLevel }} />
      }
      link={checkMainCourse()?.content?.path}
    />
  )
})
