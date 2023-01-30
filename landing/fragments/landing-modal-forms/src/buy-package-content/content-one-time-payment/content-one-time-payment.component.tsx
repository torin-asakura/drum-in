import React                          from 'react'
import { FC }                         from 'react'
import { FormattedMessage }           from 'react-intl'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Space }                      from '@ui/text'
import { Text }                       from '@ui/text'

import { SelectedCourse }             from '../selected-course'
import { ContentOneTimePaymentProps } from './content-one-time-payment.interfaces'

const ContentOneTimePayment: FC<ContentOneTimePaymentProps> = ({
  courseContent,
  finalPriceForOneTimePayment,
}) => (
  <>
    {courseContent?.titles.map((currentValue, index) => (
      <>
        <SelectedCourse
          title={courseContent.titles[index]}
          description={courseContent.descriptions[index]}
          price={courseContent.prices[index]}
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
        <FormattedMessage id='landing_modal_forms.amount' defaultMessage='Сумма:' />
        <Space />
        {finalPriceForOneTimePayment}
      </Text>
    </Row>
    <Layout flexBasis={[32, 50, 67]} flexShrink={0} />
  </>
)
export { ContentOneTimePayment }
