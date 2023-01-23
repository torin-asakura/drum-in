import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { RemoteCourse }     from '../remote-course'
import { SelectedCourse }   from '../selected-course'

const ContentOneTimePayment = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <SelectedCourse
        title={formatMessage({
          id: 'landing_modal_forms.course_sense_of_time',
          defaultMessage: 'Курс “Ощущение времени”',
        })}
        description={formatMessage({
          id: 'landing_modal_forms.course_is_for_experienced_musicians',
          defaultMessage:
            'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        })}
        price={formatMessage({
          id: 'landing_modal_forms.forty_thousand_rubles',
          defaultMessage: '40 000 ₽',
        })}
      />
      <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
      <SelectedCourse
        title={formatMessage({
          id: 'landing_modal_forms.course_fifth_dimension',
          defaultMessage: 'Курс “Пятое измерение”',
        })}
        description={formatMessage({
          id: 'landing_modal_forms.course_is_for_experienced_musicians',
          defaultMessage:
            'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        })}
        price={formatMessage({
          id: 'landing_modal_forms.forty_thousand_rubles',
          defaultMessage: '40 000 ₽',
        })}
      />
      <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
      <RemoteCourse
        title={formatMessage({
          id: 'landing_modal_forms.course_seventh_heaven',
          defaultMessage: 'Курс “Седьмое небо”',
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
          <FormattedMessage
            id='landing_modal_forms.amount_is_eighty-thousand_rubles'
            defaultMessage='Сумма: 80 000 ₽'
          />
        </Text>
      </Row>
      <Layout flexBasis={[32, 50, 67]} flexShrink={0} />
    </>
  )
}
export { ContentOneTimePayment }
