import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { SelectedCourse }   from '../selected-course'

const ContentOneTimePayment = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <SelectedCourse
        title={formatMessage({
          id: 'landing_modal_form_fifth_dimension.fifth_dimension',
          defaultMessage: '“Пятое измерение”',
        })}
        description={formatMessage({
          id: 'landing_modal_form_fifth_dimension.course_for_experienced_musician',
          defaultMessage:
            'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        })}
      />
      <Layout flexBasis={[8, 16, 24]} flexShrink={0} />
      <Row justifyContent='end'>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight='medium'
          color='text.smokyWhite'
        >
          <FormattedMessage id='landing_modal_forms.amount' defaultMessage='Сумма:' />
          <Space />
          <FormattedMessage
            id='landing_modal_form_fifth_dimension.forty_thousand'
            defaultMessage='40 000 ₽'
          />
        </Text>
      </Row>
      <Layout flexBasis={[35, 30, 40]} flexShrink={0} flexGrow={3} />
    </>
  )
}

export { ContentOneTimePayment }