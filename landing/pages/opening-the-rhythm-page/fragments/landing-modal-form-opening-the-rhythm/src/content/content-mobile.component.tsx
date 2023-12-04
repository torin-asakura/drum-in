import React                      from 'react'
import { FC }                     from 'react'
import { useCallback }            from 'react'
import { useEffect }              from 'react'
import { useState }               from 'react'

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

import { RoleModalForm }          from '../modal-form-opening-the-rhythm.enum'
import { ContentInstallmentPlan } from './content-installment-plan'
import { ContentOneTimePayment }  from './content-one-time-payment'
import { ContentProps }           from './content.interfaces'
import { useModalForm }           from '../data'

const ContentMobile: FC<ContentProps> = ({ roleVar, options, setRole }) => {
  const modalForm = useModalForm()
  const [amount, setAmount] = useState<number>(0)

  const recalculateAmount = useCallback(
    (price: number, operation: boolean) => {
      setAmount((prevSatae) => (operation ? prevSatae + price : prevSatae - price))
    },
    [setAmount]
  )

  useEffect(() => {
    if (modalForm?.courses) {
      roleVar[0] === RoleModalForm.OneTimePayment // eslint-disable-line
        ? setAmount(modalForm.courses.reduce((acc, course) => acc + course.price, 0))
        : setAmount(modalForm.monthlyPaymentNumber)
    }
  }, [roleVar, modalForm])

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
                {options.map(({ value, mutuallyExclusive }) => (
                  <>
                    <Option
                      mutuallyExclusive={mutuallyExclusive}
                      value={value}
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
            {modalForm?.title}
          </Text>
        </Box>
        <Layout flexBasis={16} flexShrink={0} />
        <Condition match={roleVar.includes(options[0].value) || roleVar.length === 0}>
          <ContentInstallmentPlan />
        </Condition>
        <Condition match={roleVar.includes(options[1].value)}>
          <ContentOneTimePayment amount={amount} recalculate={recalculateAmount} />
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
