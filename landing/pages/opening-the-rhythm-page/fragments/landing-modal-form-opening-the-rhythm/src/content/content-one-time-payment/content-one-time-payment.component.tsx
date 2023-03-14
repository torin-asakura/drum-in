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
  const titlesArray = formatMessage({
    id: 'landing_modal_form_opening_the_rhythm.feeling_of_time',
    defaultMessage: '“Ощущение времени”;“Пятое измерение”;“Седьмое небо”',
  }).split(';')
  const descriptionsArray = formatMessage({
    id: 'landing_modal_form_opening_the_rhythm.course_for_experienced_musicians',
    defaultMessage:
      'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной;Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной;Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
  }).split(';')
  const pricesArray = formatMessage({
    id: 'landing_modal_form_opening_the_rhythm.fourty_thousand',
    defaultMessage: '40 000 ₽;40 000 ₽;40 000 ₽',
  }).split(';')

  return (
    <>
      {titlesArray.map((currentValue, index) => (
        <>
          <SelectedCourse
            title={currentValue}
            description={descriptionsArray[index]}
            price={pricesArray[index]}
          />
          <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
        </>
      ))}
      <Layout flexBasis={[0, 6, 12]} flexShrink={0} />
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
            id='landing_modal_form_opening_the_rhythm.eighty_thousand'
            defaultMessage='80 000 ₽'
          />
        </Text>
      </Row>
      <Layout flexBasis={[32, 50, 67]} flexShrink={0} />
    </>
  )
}
export { ContentOneTimePayment }
