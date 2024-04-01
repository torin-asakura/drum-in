import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'

import { Element }             from '../element'
import { MainCourseItemProps } from './main-course.interfaces'
import { getUi }               from '../../helpers'

export const MainCourseItem: FC<MainCourseItemProps> = ({ mainCourseData, stateHover }) => {
  const getContentData = () => {
    if (mainCourseData && 'content' in mainCourseData) {
      return mainCourseData.content
    }
    return null
  }

  const levelCount = getContentData()?.price?.details?.levelsNumber
  const mainCourseId = mainCourseData?.id

  return (
    <Element
      stateHover={stateHover}
      title={mainCourseData?.title}
      squareRotate={getUi(mainCourseId)?.squareRotate}
      squarePositionX={getUi(mainCourseId)?.squarePositionX}
      squarePositionY={getUi(mainCourseId)?.squarePositionY}
      quantityVideoLessons={getContentData()?.price?.details?.videoTrainingsNumber}
      rectangleRotate={getUi(mainCourseId)?.rectangleRotate}
      rectanglePositionX={getUi(mainCourseId)?.rectanglePositionX}
      rectanglePositionY={getUi(mainCourseId)?.rectanglePositionY}
      quantityMonths={getContentData()?.price?.details?.monthsNumber}
      rectangleColor={getUi(mainCourseId)?.rectangleColor}
      circlePositionX={getUi(mainCourseId)?.circlePositionX}
      circlePositionY={getUi(mainCourseId)?.circlePositionY}
      circleFirstLine={getContentData()?.price?.details?.levelsNumber}
      circleSecondLine={
        <FormattedMessage id='course.price.plural_format_level' values={{ levelCount }} />
      }
      path={getContentData()?.path}
    />
  )
}
