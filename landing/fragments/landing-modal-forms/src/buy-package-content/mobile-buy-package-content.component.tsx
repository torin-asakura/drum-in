import React                      from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'

import { Form }                   from '@ui/form'
import { RoundedLineIcon }        from '@ui/icons'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Switch }                 from '@ui/switch'
import { Option }                 from '@ui/switch'
import { Space }                  from '@ui/text'
import { Text }                   from '@ui/text'

import { BuyPackageContentProps } from './buy-package-content.interfaces'
import { ContentInstallmentPlan } from './content-installment-plan'
import { ContentOneTimePayment }  from './content-one-time-payment'

const MobileBuyPackageContent: FC<BuyPackageContentProps> = ({
  roleVar,
  options,
  setRole,
  title,
  courseContent,
  finalPriceForOneTimePayment,
  monthlyPayment,
  installmentDuration,
  finalPriceForInstallment,
}) => (
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
                  <Option mutuallyExclusive={mutuallyExclusive} value={value} onSelect={setRole} />
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
          <FormattedMessage
            id='landing_modal_forms.buy_a_package_of_courses'
            defaultMessage='Купить пакет курсов'
          />
          <Space />
          {title}
        </Text>
      </Box>
      <Layout flexBasis={16} flexShrink={0} />
      {roleVar.includes(options[0].value) || roleVar.length === 0 ? (
        <ContentInstallmentPlan
          courseContent={courseContent}
          installmentDuration={installmentDuration}
          finalPriceForInstallment={finalPriceForInstallment}
          monthlyPayment={monthlyPayment}
        />
      ) : null}
      {roleVar.includes(options[1].value) ? (
        <ContentOneTimePayment
          courseContent={courseContent}
          finalPriceForOneTimePayment={finalPriceForOneTimePayment}
        />
      ) : null}
      <Form form='payment' />
    </Column>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
  </Row>
)

export { MobileBuyPackageContent }
