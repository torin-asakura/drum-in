import React                          from 'react'
import { FC }                         from 'react'
import { FormattedMessage }           from 'react-intl'
import { FormattedNumber }            from 'react-intl'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Space }                      from '@ui/text'
import { Text }                       from '@ui/text'

import { SelectedCourse }             from '../selected-course'
import { ContentOneTimePaymentProps } from './content-one-time-payment.interfaces'


const ContentOneTimePayment: FC<ContentOneTimePaymentProps> = ({
  openingTheRhythm,
  amount,
  recalculateAmount,
}) => (
  <>
    {openingTheRhythm?.payment?.courses?.nodes.map((item) => (
      <>
        <SelectedCourse
          title={item?.title || ''}
          description={item?.individualCourseData?.aboutCourse || ''}
          price={item?.individualCourseData?.price?.fullPrice || 0}
          recalculateAmount={recalculateAmount}
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
        <FormattedMessage id='landing_modal_forms.amount' />
        <Space />
        <FormattedNumber
          value={amount > 0 ? amount : 0}
          style='currency' // eslint-disable-line
          currency='RUB'
          maximumFractionDigits={0}
        />
      </Text>
    </Row>
    <Layout flexBasis={[32, 50, 67]} flexShrink={0} />
  </>
)

export { ContentOneTimePayment }
