import React                           from 'react'
import { FC }                          from 'react'
import { FormattedMessage }            from 'react-intl'

import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'

import { SelectedCourse }              from '../selected-course'
import { ContentInstallmentPlanProps } from './content-installment-plan.interfaces'

const ContentInstallmentPlan: FC<ContentInstallmentPlanProps> = ({
  courseContent,
  monthlyPayment,
  installmentDuration,
  finalPriceForInstallment,
}) => (
  <>
    {courseContent?.titles.map((currentValue, index) => (
      <SelectedCourse
        title={courseContent.titles[index]}
        description={courseContent.descriptions[index]}
      />
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
            {monthlyPayment}
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
            {installmentDuration}
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
            <FormattedMessage id='landing_modal_forms.total_amount' defaultMessage='Общая сумма' />
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['medium', 'semiRegular', 'regular']}
            lineHeight='medium'
            color='text.smokyWhite'
          >
            {finalPriceForInstallment}
          </Text>
        </Box>
      </Column>
    </Row>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} flexGrow={3} />
  </>
)

export { ContentInstallmentPlan }
