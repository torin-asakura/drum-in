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
  const titlesArray = formatMessage({
    id: 'landing_modal_form_opening_the_rhythm.feeling_of_time',
    defaultMessage: '“Ощущение времени”;“Пятое измерение”;“Седьмое небо”',
  }).split(';')
  const descriptionsArray = formatMessage({
    id: 'landing_modal_form_opening_the_rhythm.course_for_experienced_musicians',
    defaultMessage:
      'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной;Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной;Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
  }).split(';')

  return (
    <>
      {titlesArray.map((currentValue, index) => (
        <>
          <SelectedCourse title={currentValue} description={descriptionsArray[index]} />
          <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
        </>
      ))}
      <Layout flexBasis={16} flexShrink={0} />
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
                id='landing_modal_form_opening_the_rhythm.eight_thousand_seven_hundred'
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
                id='landing_modal_form_opening_the_rhythm.fifteen_months'
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
                id='landing_modal_form_opening_the_rhythm.one_hundred_seventeen_thousand'
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
