import React                  from 'react'
import { FC }                 from 'react'
import { useIntl }            from 'react-intl'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }               from '@ui/text'
import { Condition }          from '@ui/condition'

import messages               from '../messages'
import { CourseContentProps } from './course-content.interface'

const CourseContent: FC<CourseContentProps> = ({ mobile }) => {
  const intl = useIntl()
  const content = [
    {
      text: messages.onlineCourse,
      color: 'white',
      fontWeight: 'normal',
      fontSize: 'big',
      lineHeight: 'regular',
    },
    {
      text: messages.courseName,
      fontSize: 'large',
      color: 'white',
      fontWeight: 'bold',
      lineHeight: 'regular',
    },
    {
      text: messages.courseDescriptionContent,
      color: 'white',
      fontWeight: 'semiBold',
      lineHeight: 'large',
      fontSize: 'normal',
    },
  ]
  const contentMobile = [
    {
      text: messages.courseNameMobile,
      color: 'white',
      fontSize: 'mini',
      fontWeight: 'normal',
      lineHeight: 'large',
    },
    {
      text: messages.courseDescriptionMobile,
      color: 'white',
      fontSize: 'mini',
      fontWeight: 'semiNormal',
      lineHeight: 'semiRegular',
    },
  ]
  return (
    <Column>
      <Condition match={!mobile}>
        {content.map((item) => (
          <>
            <Layout>
              <Text
                fontSize={item.fontSize}
                color={item.color}
                fontWeight={item.fontWeight}
                lineHeight={item.lineHeight}
              >
                {intl.formatMessage(item.text)}
              </Text>
            </Layout>
            <Layout flexBasis={[30, 30, 39]} />
          </>
        ))}
      </Condition>
      <Condition match={mobile}>
        {contentMobile.map((item) => (
          <Row>
            <Layout flexBasis={20} flexShrink={0} />
            <Column>
              <Layout>
                <Text
                  fontSize={item.fontSize}
                  color={item.color}
                  fontWeight={item.fontWeight}
                  lineHeight={item.lineHeight}
                >
                  {intl.formatMessage(item.text)}
                </Text>
              </Layout>
              <Layout flexBasis={[30, 30, 39]} />
            </Column>
            <Layout flexBasis={20} flexShrink={0} />
          </Row>
        ))}
      </Condition>
    </Column>
  )
}

export { CourseContent }
