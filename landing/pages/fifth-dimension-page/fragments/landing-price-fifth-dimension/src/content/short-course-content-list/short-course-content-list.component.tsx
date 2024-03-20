import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { BulletedList }     from '@shared/bulleted-list-fragment'

export const ShortCourseContentList = ({ fifthDimensionData }) => {
  const videoLessonCount = parseInt(
    fifthDimensionData.individualCourseData.price.videoTrainingsNumber,
    10
  )
  const monthCount = parseInt(
    fifthDimensionData.individualCourseData.price.courseLengthInMonths,
    10
  )
  const liveBroadcastCount = parseInt(
    fifthDimensionData.individualCourseData.price.liveTrainingsNumber,
    10
  )

  const shortCourseContent = [
    {
      number: fifthDimensionData.individualCourseData.price.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    {
      number: fifthDimensionData.individualCourseData.price.liveTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_live_broadcast'
          values={{ liveBroadcastCount }}
        />
      ),
    },
    {
      number: fifthDimensionData.individualCourseData.price.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
