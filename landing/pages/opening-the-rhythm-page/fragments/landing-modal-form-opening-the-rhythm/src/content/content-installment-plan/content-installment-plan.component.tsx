import React                           from 'react'
import { FC }                          from 'react'
import { FormattedMessage }            from 'react-intl'
import { FormattedNumber }             from 'react-intl'

import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Space }                       from '@ui/text'
import { Text }                        from '@ui/text'

import { SelectedCourse }              from '../selected-course'
import { ContentInstallmentPlanProps } from './content-installment-plan.interfaces'

// TODO: add description for courses & displaying valid count months

const ContentInstallmentPlan: FC<ContentInstallmentPlanProps> = ({
  openingTheRhythm,
  amount,
  recalculate,
}) => {
  const monthCount = openingTheRhythm?.price?.details?.monthsNumber
  return (
    <>
      {openingTheRhythm?.payment?.courses?.nodes.map((item) => (
        <>
          <SelectedCourse
            title={item?.title || ''}
            description='description'
            price={item?.individualCourseData?.price?.fullPrice || 0}
            recalculate={recalculate}
          />
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
                value={openingTheRhythm?.price?.priceMonthly || 0}
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
              {openingTheRhythm?.price?.details?.monthsNumber}
              <Space />
              <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />
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
                value={amount}
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
