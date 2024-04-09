import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { BulletedList }     from '@shared/bulleted-list-fragment'

export const ShortCourseContentList = ({ polyrhythmicKeysData }) => {
  const videoLessonCount = parseInt(
    polyrhythmicKeysData.individualCourseData.price.videoTrainingsNumber,
    10
  )
  const monthCount = parseInt(
    polyrhythmicKeysData.individualCourseData.price.courseLengthInMonths,
    10
  )

  const shortCourseContent = [
    {
      number: polyrhythmicKeysData.individualCourseData.price.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    {
      number: polyrhythmicKeysData.individualCourseData.price.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
