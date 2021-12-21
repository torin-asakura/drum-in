import React                  from 'react'
import { FC }                 from 'react'
import { useIntl }            from 'react-intl'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'
import { Condition }          from '@ui/condition'

import messages               from '../messages'
import { CourseContentProps } from './course-content.interface'

const CourseContent: FC<CourseContentProps> = ({ mobile }) => {
  const intl = useIntl()
  const content = [
    messages.courseName,
    messages.courseDescriptionContent,
    messages.courseNameMobile,
    messages.courseDescriptionMobile,
  ]

  return (
    <Column alignItems='center'>
      <Layout display={['flex', 'flex', 'none']}>
        <Text fontSize='small' color='white' fontWeight='bold' lineHeight='semiRegular'>
          {intl.formatMessage(messages.courseNameMobile)}
        </Text>
      </Layout>
      <Layout display={['none', 'none', 'flex']}>
        <Text fontSize='large' color='white' fontWeight='bold' lineHeight='simNormal'>
          {intl.formatMessage(messages.courseName)}
        </Text>
      </Layout>
      <Layout flexBasis={[30, 30, 39]} />
      <Layout display={['flex', 'flex', 'none']}>
        <Text fontSize='mini' color='white' fontWeight='semiNormal' lineHeight='semiRegular'>
          {intl.formatMessage(messages.courseDescriptionMobile)}
        </Text>
      </Layout>
      <Layout display={['none', 'none', 'flex']}>
        <Text fontSize='normal' color='white' fontWeight='semiBold' lineHeight='large'>
          {intl.formatMessage(messages.courseDescriptionContent)}
        </Text>
      </Layout>
      <Layout flexBasis={[30, 30, 39]} />
    </Column>
  )
}

export { CourseContent }
