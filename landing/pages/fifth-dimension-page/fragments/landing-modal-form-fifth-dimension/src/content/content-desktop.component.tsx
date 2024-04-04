import { usePaymentAmount } from '@shared/utils/src'
import React                from 'react'
import { FC }               from 'react'
import { useIntl }          from 'react-intl'

import { Button }                 from '@ui/button'
import { Condition }              from '@ui/condition'
import { Form }                   from '@ui/form'
import { CrossMenuIcon }          from '@ui/icons'
import { ArrowLeftTailIcon }      from '@ui/icons'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Switch }                 from '@ui/switch'
import { Option }                 from '@ui/switch'
import { Text }                   from '@ui/text'
import { Space }                  from '@ui/text/src'

import { ContentInstallmentPlan } from './content-installment-plan'
import { ContentOneTimePayment }  from './content-one-time-payment'
import { ContentProps }           from './content.interfaces'

const ContentDesktop: FC<ContentProps> = ({
  fifthDimensionData,
  onClose,
  roleVar,
  options,
  setRole,
}) => {
  const installmentAmount = fifthDimensionData?.individualCourseData?.price?.monthlyPrice
  const oneTimeAmount = fifthDimensionData?.individualCourseData?.price?.fullPrice
  const { amount } = usePaymentAmount(roleVar[0], installmentAmount, oneTimeAmount)
  const { formatMessage } = useIntl()

  return (
    <>
      <Box
        width='100%'
        flexDirection={['column', 'row', 'row']}
        justifyContent={['start', 'space-between', 'space-between']}
        alignItems='start'
      >
        <Box width={['100%', 419, 419]}>
          <Text
            fontWeight='medium'
            fontSize={['large', 'moderate', 'semiIncreased']}
            lineHeight='default'
            color='text.smokyWhite'
            display='inline'
          >
            {formatMessage({ id: 'course.payment.buy_course' })}
            {` "${fifthDimensionData?.title}"`}
          </Text>
        </Box>
        <Box width={['100%', 'auto', 'auto']} justifyContent='end'>
          <Button
            size='littlePaddingMediumHeight'
            variant='transparentWhiteToGrayBackground'
            onClick={onClose}
          >
            <CrossMenuIcon width={24} height={24} />
          </Button>
        </Box>
      </Box>
      <Layout flexBasis={21} flexShrink={0} />
      <Row alignItems='end'>
        <Box backgroundColor='background.transparentWhite' borderRadius='bigger' width={263}>
          <Layout flexBasis={5} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={5} flexShrink={0} />
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
            <Layout flexBasis={5} flexShrink={0} />
          </Column>
          <Layout flexBasis={5} flexShrink={0} />
        </Box>
        <Layout flexBasis={14} flexShrink={0} />
        <Box>
          <ArrowLeftTailIcon width={85} height={25} />
        </Box>
        <Box
          alignSelf='start'
          padding='4px 8px'
          borderRadius='micro'
          backgroundColor='background.green'
          style={{ transform: 'rotate(15deg)' }}
        >
          <Text fontWeight='medium' fontSize='medium' lineHeight='medium' color='text.smokyWhite'>
            {formatMessage({ id: 'course.payment.discount' })}
            <Space />
            {fifthDimensionData?.individualCourseData?.price?.discount}
            {formatMessage({ id: 'currency.ruble' })}
          </Text>
        </Box>
      </Row>
      <Layout flexBasis={28} flexShrink={0} />
      <Condition match={roleVar.includes(options[0].value) || roleVar.length === 0}>
        <ContentInstallmentPlan fifthDimensionData={fifthDimensionData} />
      </Condition>
      <Condition match={roleVar.includes(options[1].value)}>
        <ContentOneTimePayment fifthDimensionData={fifthDimensionData} />
      </Condition>
      <Condition match={!!amount}>
        <Form amount={amount} form='payment' key={amount} />
      </Condition>
    </>
  )
}

export { ContentDesktop }
