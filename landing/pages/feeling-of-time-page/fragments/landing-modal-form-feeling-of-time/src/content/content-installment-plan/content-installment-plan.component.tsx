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
          id: 'landing_modal_form_feeling_of_time.feeling_of_time',
          defaultMessage: '“Ощущение времени”',
        })}
        description={formatMessage({
          id: 'landing_modal_form_feeling_of_time.course_for_experienced_musician',
          defaultMessage:
            'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        })}
      />
      <Layout flexBasis={[24, 26, 28]} flexShrink={0} />
      <Row>
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
                id='landing_modal_form_feeling_of_time.eight_thousand_seven_hundred'
                defaultMessage='8 700 ₽/мес'
              />
            </Text>
          </Box>
        </Column>
        <Layout flexBasis={[0, 40, 50]} flexShrink={0} flexGrow={[2, 0, 0]} />
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
                id='landing_modal_form_feeling_of_time.five_months'
                defaultMessage='5 месяцев'
              />
            </Text>
          </Box>
        </Column>
        <Layout flexGrow={[2, 3, 3]} />
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
                id='landing_modal_form_feeling_of_time.forty_three_thousand_five_hundred'
                defaultMessage='43 500 ₽'
              />
            </Text>
          </Box>
        </Column>
      </Row>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} flexGrow={3} />
    </>
  )
}

export { ContentInstallmentPlan }
