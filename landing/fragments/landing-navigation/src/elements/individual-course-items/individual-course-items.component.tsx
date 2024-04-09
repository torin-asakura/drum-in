/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/jsx-no-useless-fragment */

import React                          from 'react'
import { FC }                         from 'react'
import { FormattedMessage }           from 'react-intl'
import { useIntl }                    from 'react-intl'

import { Layout }                     from '@ui/layout'

import { Element }                    from '../element'
import { IndividualCourseItemsProps } from './individual-course-items.interfaces'
import { getUi }                      from '../../helpers'

export const IndividualCourseItems: FC<IndividualCourseItemsProps> = ({
  individualCoursesData,
  stateHover,
}) => {
  const { formatMessage } = useIntl()

  const getCircleSecondLineValue = (item) => {
    const liveBroadcastCount = parseInt(item?.individualCourseData?.price?.liveTrainingsNumber, 10)
    return !!liveBroadcastCount ? (
      <FormattedMessage
        id='course.price.plural_format_live_broadcast'
        values={{ liveBroadcastCount }}
      />
    ) : null
  }

  return (
    <>
      {individualCoursesData?.map((item) => {
        if (individualCoursesData && 'individualCourseData' in item) {
          return (
            <React.Fragment key={item?.title}>
              <Element
                stateHover={stateHover}
                title={item?.title}
                level={
                  item?.individualCourseData?.price?.level
                    ? `${formatMessage({ id: 'course.price.level' })} ${
                        item?.individualCourseData?.price?.level
                      }`
                    : null
                }
                levelBackground={getUi(item?.id)?.levelBackground}
                squareRotate={getUi(item?.id)?.squareRotate}
                squarePositionX={getUi(item?.id)?.squarePositionX}
                squarePositionY={getUi(item?.id)?.squarePositionY}
                quantityVideoLessons={item?.individualCourseData?.price?.videoTrainingsNumber}
                rectangleRotate={getUi(item?.id)?.rectangleRotate}
                rectanglePositionX={getUi(item?.id)?.rectanglePositionX}
                rectanglePositionY={getUi(item?.id)?.rectanglePositionY}
                quantityMonths={item?.individualCourseData?.price?.courseLengthInMonths}
                rectangleColor={getUi(item?.id)?.rectangleColor}
                circlePositionX={getUi(item?.id)?.circlePositionX}
                circlePositionY={getUi(item?.id)?.circlePositionY}
                circleFirstLine={item?.individualCourseData?.price?.liveTrainingsNumber}
                circleSecondLine={
                  item?.individualCourseData?.price?.bonuses || getCircleSecondLineValue(item)
                }
                path={item?.individualCourseData?.path}
              />
              <Layout flexBasis={16} />
            </React.Fragment>
          )
        }

        return null
      })}
    </>
  )
}
