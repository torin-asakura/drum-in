import React                           from 'react'
import { FC }                          from 'react'
import { FormattedMessage }            from 'react-intl'

import { BulletedList }                from '@shared/bulleted-list-fragment'

import { ShortCourseContentListProps } from './short-course-content-list.interfaces'

export const ShortCourseContentList: FC<ShortCourseContentListProps> = ({ fifthDimensionData }) => {
  const videoLessonCount = fifthDimensionData?.individualCourseData?.price?.videoTrainingsNumber

  const monthCount = fifthDimensionData?.individualCourseData?.price?.courseLengthInMonths

  const liveBroadcastCount = parseInt(
    fifthDimensionData?.individualCourseData?.price?.liveTrainingsNumber || '',
    10
  )

  const shortCourseContent = [
    {
      number: fifthDimensionData?.individualCourseData?.price?.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    {
      number: parseInt(
        fifthDimensionData?.individualCourseData?.price?.liveTrainingsNumber || '',
        10
      ),
      text: (
        <FormattedMessage
          id='course.price.plural_format_live_broadcast'
          values={{ liveBroadcastCount }}
        />
      ),
    },
    {
      number: fifthDimensionData?.individualCourseData?.price?.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
