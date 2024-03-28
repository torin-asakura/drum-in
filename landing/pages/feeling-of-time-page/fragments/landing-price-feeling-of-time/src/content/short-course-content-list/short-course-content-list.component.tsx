import { FC }               from 'react'
import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { BulletedList }                from '@shared/bulleted-list-fragment'
import { ShortCourseContentListProps } from './short-course-content-list.interfaces'

export const ShortCourseContentList:FC<ShortCourseContentListProps> = ({ feelingOfTimeData }) => {
  const videoLessonCount = feelingOfTimeData?.individualCourseData?.price?.videoTrainingsNumber

  const monthCount = feelingOfTimeData?.individualCourseData?.price?.courseLengthInMonths
  const liveBroadcastCount = parseInt(
    feelingOfTimeData?.individualCourseData?.price?.liveTrainingsNumber || '',
    10
  )

  const shortCourseContent = [
    {
      number: feelingOfTimeData?.individualCourseData?.price?.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    {
      number: parseInt(feelingOfTimeData?.individualCourseData?.price?.liveTrainingsNumber || '',10),
      text: (
        <FormattedMessage
          id='course.price.plural_format_live_broadcast'
          values={{ liveBroadcastCount }}
        />
      ),
    },
    {
      number: feelingOfTimeData?.individualCourseData?.price?.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
