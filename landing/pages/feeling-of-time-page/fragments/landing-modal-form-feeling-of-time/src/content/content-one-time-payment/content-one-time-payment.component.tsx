import React                          from 'react'
import { FC }                         from 'react'
import { FormattedMessage }           from 'react-intl'
import { FormattedNumber }            from 'react-intl'
import { useIntl }                    from 'react-intl'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Space }                      from '@ui/text'
import { Text }                       from '@ui/text'

import { SelectedCourse }             from '../selected-course'
import { ContentOneTimePaymentProps } from './content-one-time-payment.interfaces'

const ContentOneTimePayment: FC<ContentOneTimePaymentProps> = ({ feelingOfTimeData }) => {
  const { formatMessage } = useIntl()

  return (
    <>
      {/* TODO: description course */}
      <SelectedCourse
        title={`${formatMessage({ id: 'landing_modal_forms.course' })} "${
          feelingOfTimeData?.title
        }"`}
        description='description'
      />
      <Layout flexBasis={[8, 16, 24]} flexShrink={0} />
      <Row justifyContent='end'>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight='medium'
          color='text.smokyWhite'
        >
          <FormattedMessage id='landing_modal_forms.amount' />
          <Space />
          <FormattedNumber
            value={feelingOfTimeData?.individualCourseData?.price?.fullPrice || 0}
            style='currency' // eslint-disable-line
            currency='RUB'
            maximumFractionDigits={0}
          />
        </Text>
      </Row>
      <Layout flexBasis={[35, 30, 40]} flexShrink={0} flexGrow={3} />
    </>
  )
}

export { ContentOneTimePayment }
