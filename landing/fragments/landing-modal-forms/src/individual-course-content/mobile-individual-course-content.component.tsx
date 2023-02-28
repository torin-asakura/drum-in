import React                            from 'react'
import { FC }                           from 'react'
import { FormattedMessage }             from 'react-intl'

import { Form }                         from '@ui/form'
import { RoundedLineIcon }              from '@ui/icons'
import { Column }                       from '@ui/layout'
import { Layout }                       from '@ui/layout'
import { Box }                          from '@ui/layout'
import { Row }                          from '@ui/layout'
import { Space }                        from '@ui/text'
import { Text }                         from '@ui/text'

import { IndividualCourseContentProps } from './individual-course-content.interfaces'
import { SelectedCourse }               from './selected-course'

const MobileIndividualCourseContent: FC<IndividualCourseContentProps> = ({
  title,
  courseContent,
  finalPriceForOneTimePayment,
}) => (
  <Row height={540}>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={12} flexShrink={0} />
      <Row justifyContent='center'>
        <RoundedLineIcon width={36} height={3} />
      </Row>
      <Layout flexBasis={32} flexShrink={0} />
      <Box width={300}>
        <Text
          fontWeight='medium'
          fontSize='large'
          lineHeight='default'
          color='text.smokyWhite'
          display='inline'
        >
          <FormattedMessage id='landing_modal_forms.buy_course' defaultMessage='Купить курс' />
          <Space />
          {title}
        </Text>
      </Box>
      <Layout flexBasis={12} flexShrink={0} />
      {courseContent?.titles.map((currentValue, index) => (
        <SelectedCourse
          title={courseContent.titles[index]}
          description={courseContent.descriptions[index]}
        />
      ))}
      <Layout flexBasis={18} flexShrink={0} />
      <Row justifyContent='end'>
        <Text fontWeight='medium' fontSize='semiMedium' lineHeight='medium' color='text.smokyWhite'>
          <FormattedMessage id='landing_modal_forms.amount' defaultMessage='Сумма:' />
          <Space />
          {finalPriceForOneTimePayment}
        </Text>
      </Row>
      <Layout flexBasis={50} flexShrink={0} />
      <Form form='payment' />
    </Column>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
  </Row>
)

export { MobileIndividualCourseContent }
