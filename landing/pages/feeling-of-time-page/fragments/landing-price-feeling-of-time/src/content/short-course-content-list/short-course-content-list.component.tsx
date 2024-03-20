import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { BulletedList }     from '@shared/bulleted-list-fragment'

export const ShortCourseContentList = ({ feelingOfTimeData }) => {
  const videoLessonCount = parseInt(
    feelingOfTimeData.individualCourseData.price.videoTrainingsNumber,
    10
  )
  const monthCount = parseInt(feelingOfTimeData.individualCourseData.price.courseLengthInMonths, 10)
  const liveBroadcastCount = parseInt(
    feelingOfTimeData?.individualCourseData.price.liveTrainingsNumber,
    10
  )

  const shortCourseContent = [
    {
      number: feelingOfTimeData.individualCourseData.price.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    {
      number: feelingOfTimeData?.individualCourseData.price.liveTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_live_broadcast'
          values={{ liveBroadcastCount }}
        />
      ),
    },
    {
      number: feelingOfTimeData.individualCourseData.price.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
