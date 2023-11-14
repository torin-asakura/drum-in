import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedNumber }  from 'react-intl'

import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SelectedCourse }   from '../selected-course'
import { useModalForm }     from '../../data'

const ContentInstallmentPlan = () => {
  const modalForm = useModalForm()

  return (
    <>
      {modalForm?.courses?.map(({ name, description }) => (
        <SelectedCourse title={name} description={description} />
      ))}
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
              <FormattedNumber
                value={modalForm?.monthlyPaymentNumber || 0}
                style='currency' // eslint-disable-line
                currency='RUB'
                maximumFractionDigits={0}
              />
              <FormattedMessage
                id='landing_price_seventh_heaven.per_month'
                defaultMessage='/мес.'
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
              {modalForm?.installmentDuration}
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
              <FormattedNumber
                value={modalForm?.finalPriceForInstallmentNumber || 0}
                style='currency' // eslint-disable-line
                currency='RUB'
                maximumFractionDigits={0}
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
