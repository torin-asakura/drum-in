import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SelectedCourse }   from '../selected-course'

const ContentInstallmentPlan = () => {
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
      />
      <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
      <SelectedCourse
        title={formatMessage({
          id: 'landing_modal_forms.course_seventh_heaven',
          defaultMessage: 'Курс “Седьмое небо”',
        })}
        description={formatMessage({
          id: 'landing_modal_forms.course_is_for_experienced_musicians',
          defaultMessage:
            'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        })}
      />
      <Layout flexBasis={[24, 26, 28]} flexShrink={0} />
      <Row justifyContent='space-between'>
        <Column>
          <Box>
            <Text
              fontWeight='medium'
              fontSize='micro'
              lineHeight='medium'
              color='text.transparentSmokyWhite'
            >
              <FormattedMessage
                id='landing_modal_forms.monthly_payment'
                defaultMessage='Ежемесячный платёж'
              />
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['medium', 'semiRegular', 'regular']}
              lineHeight='medium'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_modal_forms.eight_thousand_seven_hundred_rubles_a_month'
                defaultMessage='8 700 ₽/мес.'
              />
            </Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text
              fontWeight='medium'
              fontSize='micro'
              lineHeight='medium'
              color='text.transparentSmokyWhite'
            >
              <FormattedMessage
                id='landing_modal_forms.installment_period'
                defaultMessage='Срок рассрочки'
              />
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['medium', 'semiRegular', 'regular']}
              lineHeight='medium'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_modal_forms.fifteen_months'
                defaultMessage='15 месяцев'
              />
            </Text>
          </Box>
        </Column>
        <Column>
          <Box>
            <Text
              fontWeight='medium'
              fontSize='micro'
              lineHeight='medium'
              color='text.transparentSmokyWhite'
            >
              <FormattedMessage
                id='landing_modal_forms.total_amount'
                defaultMessage='Общая сумма'
              />
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['medium', 'semiRegular', 'regular']}
              lineHeight='medium'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_modal_forms.one_hundred_seventeen_thousand_four_hundred_rubles'
                defaultMessage='117 400 ₽'
              />
            </Text>
          </Box>
        </Column>
      </Row>
      <Layout flexBasis={[20, 32, 45]} flexShrink={0} />
    </>
  )
}
export { ContentInstallmentPlan }
