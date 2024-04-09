import React                           from 'react'
import { FC }                          from 'react'
import { FormattedMessage }            from 'react-intl'

import { BulletedList }                from '@shared/bulleted-list-fragment'

import { ShortCourseContentListProps } from './short-course-content-list.interfaces'

export const ShortCourseContentList: FC<ShortCourseContentListProps> = ({ connacolData }) => {
  const videoLessonCount = connacolData?.individualCourseData?.price?.videoTrainingsNumber
  const monthCount = connacolData?.individualCourseData?.price?.courseLengthInMonths

  const shortCourseContent = [
    {
      number: connacolData?.individualCourseData?.price?.videoTrainingsNumber,
      text: (
        <FormattedMessage
          id='course.price.plural_format_video_lesson'
          values={{ videoLessonCount }}
        />
      ),
    },
    { text: connacolData?.individualCourseData?.price?.bonuses },
    {
      number: connacolData?.individualCourseData?.price?.courseLengthInMonths,
      text: <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />,
    },
  ]

  return <BulletedList list={shortCourseContent} />
}
