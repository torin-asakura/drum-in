import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { BulletedList }     from '@shared/bulleted-list-fragment'

export const ShortCourseContentList = ({ connacolData }) => {
  const videoLessonCount = parseInt(
    connacolData.individualCourseData.price.videoTrainingsNumber,
    10
  )
  const monthCount = parseInt(connacolData.individualCourseData.price.courseLengthInMonths, 10)

  const shortCourseContent = [
    {
      number: connacolData.individualCourseData.price.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    { text: connacolData.individualCourseData.price.liveTrainingsNumber },
    {
      number: connacolData.individualCourseData.price.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
