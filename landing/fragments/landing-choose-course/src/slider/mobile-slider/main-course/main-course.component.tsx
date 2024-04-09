import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { memo }             from 'react'
import { useIntl }          from 'react-intl'

import { Slide }            from '../../slide'
import { MainCourseProps }  from './main-course.interfaces'
import { getUi }            from '../../../helpers'

export const MainCourse: FC<MainCourseProps> = memo(({ mainCourseData }) => {
  const { formatMessage } = useIntl()
  const courseData = mainCourseData?.course?.nodes[0]

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
      desc={mainCourseData?.description}
      price={`${checkMainCourse()?.content?.price?.priceMonthly} ${formatMessage({
        id: 'landing_price.rubles_per_month',
      })}`}
      link={checkMainCourse()?.content?.path}
      squareRotate={getUi(courseData?.id).squareRotateMobile}
      squarePositionX={getUi(courseData?.id).squarePositionXMobile}
      squarePositionY={getUi(courseData?.id).squarePositionYMobile}
      quantityVideoLessons={checkMainCourse()?.content?.price?.details?.videoTrainingsNumber}
      rectangleRotate={getUi(courseData?.id).rectangleRotateMobile}
      rectanglePositionX={getUi(courseData?.id).rectanglePositionXMobile}
      rectanglePositionY={getUi(courseData?.id).rectanglePositionYMobile}
      quantityMonths={checkMainCourse()?.content?.price?.details?.monthsNumber}
      rectangleColor={getUi(courseData?.id).rectangleColor}
      circlePositionX={getUi(courseData?.id).circlePositionXMobile}
      circlePositionY={getUi(courseData?.id).circlePositionYMobile}
      circleFirstLine={checkMainCourse()?.content?.price?.details?.levelsNumber}
      circleSecondLine={
        <FormattedMessage id='course.price.plural_format_level' values={{ countLevel }} />
      }
    />
  )
})
