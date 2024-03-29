import React                           from 'react'
import { FC }                          from 'react'
import { FormattedMessage }            from 'react-intl'
import { FormattedNumber }             from 'react-intl'
import { useIntl }                     from 'react-intl'

import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { Space }                       from '@ui/text/src'

import { SelectedCourse }              from '../selected-course'
import { ContentInstallmentPlanProps } from './content-installment-plan.interfaces'

const ContentInstallmentPlan: FC<ContentInstallmentPlanProps> = ({ feelingOfTimeData }) => {
  const { formatMessage } = useIntl()
  const monthCount = feelingOfTimeData?.individualCourseData?.price?.courseLengthInMonths
  const monthlyPrice = feelingOfTimeData?.individualCourseData?.price?.monthlyPrice
  const courseLengthInMonths = feelingOfTimeData?.individualCourseData?.price?.courseLengthInMonths
  const totalAmountIfMonthly = (courseLengthInMonths || 0) * (monthlyPrice || 0)

  return (
    <>
      {/* TODO: description course */}
      <SelectedCourse
        title={`${formatMessage({ id: 'landing_modal_forms.course' })} "${
          feelingOfTimeData?.title
        }"`}
        description='description'
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
                value={monthlyPrice || 0}
                style='currency' // eslint-disable-line
                currency='RUB'
                maximumFractionDigits={0}
              />
              <FormattedMessage id='landing_modal_forms.per_month' />
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
              {courseLengthInMonths}
              <Space />
              <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />
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
                value={totalAmountIfMonthly}
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
