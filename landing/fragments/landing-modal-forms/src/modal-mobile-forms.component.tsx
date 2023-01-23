import React                      from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'
import { motion }                 from 'framer-motion'
import { useState }               from 'react'
import { useIntl }                from 'react-intl'

import { Condition }              from '@ui/condition'
import { Form }                   from '@ui/form'
import { RoundedLineIcon }        from '@ui/icons'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Switch }                 from '@ui/switch'
import { Option }                 from '@ui/switch'
import { Text }                   from '@ui/text'

import { Backdrop }               from './backdrop'
import { ContainerMobile }        from './container'
import { ContentInstallmentPlan } from './content-installment-plan'
import { ContentOneTimePayment }  from './content-one-time-payment'
import { ModalFormsProps }        from './modal-forms.interfaces'
import { Role }                   from './modal-forms.interfaces'
import { Renderer }               from './renderer'

const ModalMobileForms: FC<ModalFormsProps> = ({
  activeRender,
  onClose,
  display = 'consultation',
  scroll = true,
  typePayment = 'Рассрочка',
}) => {
  const [roleVar, setRole] = useState<Role>([typePayment])
  const { formatMessage } = useIntl()
  const options = [
    {
      value: formatMessage({
        id: 'landing_modal_forms.installment_plan',
        defaultMessage: 'Рассрочка',
      }),
      mutuallyExclusive: true,
    },
    {
      value: formatMessage({
        id: 'landing_modal_forms.one_time_payment',
        defaultMessage: 'Разовый платёж',
      }),
      mutuallyExclusive: true,
    },
  ]

  return (
    <Renderer active={activeRender}>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{ position: 'fixed', bottom: '-100%', left: 0, width: '100%', zIndex: 950 }}
        animate={{ bottom: 0 }}
        exit={{ bottom: '-100%' }}
        transition={{ duration: 0.5 }}
        id='modal-form-mobile'
      >
        <ContainerMobile scroll={scroll}>
          <Condition match={display === 'consultation'}>
            <Row height={472}>
              <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
              <Column width='100%'>
                <Layout flexBasis={12} flexShrink={0} />
                <Row justifyContent='center'>
                  <RoundedLineIcon width={36} height={3} />
                </Row>
                <Layout flexBasis={32} flexShrink={0} />
                <Box width={300}>
                  <Text
                    fontWeight='medium'
                    fontSize='large'
                    lineHeight='default'
                    color='text.smokyWhite'
                  >
                    <FormattedMessage
                      id='landing_modal_forms.free_consultation_from_a_teacher'
                      defaultMessage='Бесплатная консультация от преподавателя'
                    />
                  </Text>
                </Box>
                <Layout flexBasis={12} flexShrink={0} />
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize='micro'
                    lineHeight='medium'
                    color='text.transparentSmokyWhite'
                  >
                    <FormattedMessage
                      id='landing_modal_forms.we_will_contact_you_as_soon_as_possible'
                      defaultMessage='Мы свяжемся с вами в ближайшее время.'
                    />
                  </Text>
                </Box>
                <Layout flexBasis={32} flexShrink={0} />
                <Form />
              </Column>
              <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
            </Row>
          </Condition>
          <Condition match={display === 'payment'}>
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
                    fontWeight='medium'
                    fontSize={['large', 'moderate', 'semiIncreased']}
                    lineHeight='default'
                    color='text.smokyWhite'
                  >
                    <FormattedMessage
                      id='landing_modal_forms.buy_a_package_of_courses'
                      defaultMessage='Купить пакет курсов “Открытие ритма”'
                    />
                  </Text>
                </Box>
                <Layout flexBasis={16} flexShrink={0} />
                {roleVar.includes(options[0].value) || roleVar.length === 0 ? (
                  <ContentInstallmentPlan />
                ) : null}
                {roleVar.includes(options[1].value) ? <ContentOneTimePayment /> : null}
                <Form form='payment' />
              </Column>
              <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
            </Row>
          </Condition>
        </ContainerMobile>
      </motion.div>
    </Renderer>
  )
}
export { ModalMobileForms }
