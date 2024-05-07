import React                      from 'react'
import { FC }                     from 'react'

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
import { usePaymentSettings }     from '@globals/data/src'

import { ContentInstallmentPlan } from './content-installment-plan'
import { ContentOneTimePayment }  from './content-one-time-payment'
import { ContentProps }           from './content.interfaces'
import { useContent }             from './content.hook'

const ContentMobile: FC<ContentProps> = ({   onClose,

  roleVar, options, setRole, openingTheRhythm
}) => {
  const { paymentSettingsData } = usePaymentSettings()

  const { amount, recalculateAmount, months, recalculateMonths } = useContent(
    roleVar[0],
    openingTheRhythm
  )
  return (
    <Row height={540}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={12} flexShrink={0} />
        <Row justifyContent='center'>
          <Box onClick={onClose} height={6} width={50} justifyContent='center' alignItems='center'>
            <RoundedLineIcon width={36} height={3} />
          </Box>
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
        <Box width={[300, 450, 450]}>
          <Text
            display='inline'
            fontWeight='medium'
            fontSize={['large', 'moderate', 'semiIncreased']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {openingTheRhythm?.payment?.title}
          </Text>
        </Box>
        <Layout flexBasis={16} flexShrink={0} />
        <Condition match={roleVar.includes(options[0].value) || roleVar.length === 0}>
          <ContentInstallmentPlan
            recalculateMonths={recalculateMonths}
            recalculateAmount={recalculateAmount}
            amount={amount}
            months={months}
            openingTheRhythm={openingTheRhythm}
          />
        </Condition>
        <Condition match={roleVar.includes(options[1].value)}>
          <ContentOneTimePayment
            openingTheRhythm={openingTheRhythm}
            amount={amount}
            recalculateAmount={recalculateAmount}
          />
        </Condition>
        <Condition match={!!amount && amount > 0}>
          <Form amount={amount} storeId={paymentSettingsData?.storeID} key={amount} />
        </Condition>
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  )
}

export { ContentMobile }
