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
      {modalForm?.courses?.map(({ description, name }) => (
        <>
          <SelectedCourse title={name} description={description} />
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
              <FormattedMessage id='landing_modal_forms.monthly_payment' />
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
              <FormattedMessage id='landing_modal_forms.per_month' />
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
              <FormattedMessage id='landing_modal_forms.installment_period' />
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
        <Column>
          <Box>
            <Text
              fontWeight='medium'
              fontSize='micro'
              lineHeight='medium'
              color='text.transparentSmokyWhite'
            >
              <FormattedMessage id='landing_modal_forms.total_amount' />
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
      <Layout flexBasis={[20, 32, 45]} flexShrink={0} />
    </>
  )
}

export { ContentInstallmentPlan }
