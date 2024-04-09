import React                      from 'react'
import { FC }                     from 'react'
import { useIntl }                from 'react-intl'

import { Condition }              from '@ui/condition'
import { Form }                   from '@ui/form'
import { RoundedLineIcon }        from '@ui/icons'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Switch }                 from '@ui/switch'
import { Option }                 from '@ui/switch'
import { Text }                   from '@ui/text'
import { Space }                  from '@ui/text/src'
import { usePaymentAmount }       from '@shared/utils/src'

import { ContentInstallmentPlan } from './content-installment-plan'
import { ContentOneTimePayment }  from './content-one-time-payment'
import { ContentProps }           from './content.interfaces'

const ContentMobile: FC<ContentProps> = ({ connacolData, roleVar, options, setRole }) => {
  const installmentAmount = connacolData?.individualCourseData?.price?.monthlyPrice
  const oneTimeAmount = connacolData?.individualCourseData?.price?.fullPrice
  const { amount } = usePaymentAmount(roleVar[0], installmentAmount, oneTimeAmount)
  const { formatMessage } = useIntl()

  return (
    <Row height={540}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={12} flexShrink={0} />
        <Row justifyContent='center'>
          <RoundedLineIcon width={36} height={3} />
        </Row>
        <Layout flexBasis={20} flexShrink={0} />
        <Box
          alignSelf='center'
          backgroundColor='background.transparentWhite'
          borderRadius='bigger'
          width={200}
        >
          <Layout flexBasis={4} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={4} flexShrink={0} />
            <Row justifyContent='space-between'>
              <Switch active={roleVar}>
                {options.map(({ value, label, mutuallyExclusive }) => (
                  <>
                    <Option
                      mutuallyExclusive={mutuallyExclusive}
                      value={value}
                      label={label}
                      onSelect={setRole}
                    />
                    <Layout flexBasis={8} />
                  </>
                ))}
              </Switch>
            </Row>
            <Layout flexBasis={4} flexShrink={0} />
          </Column>
          <Layout flexBasis={4} flexShrink={0} />
        </Box>
        <Layout flexBasis={16} flexShrink={0} />
        <Box width={['100%', 450, 450]}>
          <Text
            display='inline'
            fontWeight='medium'
            fontSize={['large', 'moderate', 'semiIncreased']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {formatMessage({ id: 'course.payment.buy_course' })}
            <Space />
            {`"${connacolData?.title}"`}
          </Text>
        </Box>
        <Layout flexBasis={16} flexShrink={0} />
        <Condition match={roleVar.includes(options[0].value) || roleVar.length === 0}>
          <ContentInstallmentPlan connacolData={connacolData} />
        </Condition>
        <Condition match={roleVar.includes(options[1].value)}>
          <ContentOneTimePayment connacolData={connacolData} />
        </Condition>
        <Condition match={!!amount}>
          <Form amount={amount} form='payment' key={amount} />
        </Condition>
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  )
}

export { ContentMobile }
