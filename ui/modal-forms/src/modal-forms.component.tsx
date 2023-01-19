import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Form }             from '@ui/form'
import { CrossMenuIcon }    from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }         from '@ui/layout'
import { Switch }           from '@ui/switch'
import { Option }           from '@ui/switch'
import { Text }             from '@ui/text'

import { Backdrop }         from './backdrop'
import { Container }        from './container'
import { Role }             from './modal-forms.interfaces'
import { ModalFormsProps }  from './modal-forms.interfaces'
import { Renderer }         from './renderer'

const ModalForms: FC<ModalFormsProps> = ({
  activeRender,
  onClose,
  display = 'consultation',
  scroll = true,
}) => {
  const [roleVar, setRole] = useState<Role>(['Рассрочка'])
  const { formatMessage } = useIntl()
  const options = [
    {
      value: formatMessage({
        id: 'landing_modal_forms.installment_plan',
        defaultMessage: 'Рассрочка',
      }),
      mutuallyExclusive: false,
    },
    {
      value: formatMessage({
        id: 'landing_modal_forms.one_time_payment',
        defaultMessage: 'Разовый платёж',
      }),
      mutuallyExclusive: false,
    },
  ]
  const Content = () => {
    if (roleVar.includes('Разовый платёж')) {
      return <Box width={40} height={40} backgroundColor='green' />
    } else if (roleVar.includes('Рассрочка')) {
      return <Box width={40} height={40} backgroundColor='red' />
    } else {
      return null
    }
  }

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
        style={{ position: 'fixed', right: '-100%', top: 0, height: '100%', zIndex: 9999 }}
        animate={{ right: 0 }}
        exit={{ right: '-100%' }}
        transition={{ duration: 0.5 }}
        id='modal-form'
      >
        <Container scroll={scroll}>
          <Box width={[370, 630, 666]}>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={[15, 42, 48]} flexShrink={0} />
              <Condition match={display === 'consultation'}>
                <Box
                  width='100%'
                  flexDirection={['column', 'row', 'row']}
                  justifyContent={['start', 'space-between', 'space-between']}
                  alignItems='start'
                >
                  <Column width={['100%', 450, 450]}>
                    <Box>
                      <Text
                        fontWeight='medium'
                        fontSize={['large', 'moderate', 'semiIncreased']}
                        lineHeight='default'
                        color='text.smokyWhite'
                      >
                        <FormattedMessage
                          id='landing_modal_forms.free_consultation_from_a_teacher'
                          defaultMessage='Бесплатная консультация от преподавателя'
                        />
                      </Text>
                    </Box>
                    <Layout flexBasis={[6, 9, 12]} flexShrink={0} />
                    <Box>
                      <Text
                        fontWeight='medium'
                        fontSize={['semiMedium', 'semiMedium', 'medium']}
                        lineHeight='medium'
                        color='text.transparentSmokyWhite'
                      >
                        <FormattedMessage
                          id='landing_modal_forms.fill_out_the_form_and_we_will_contact_you'
                          defaultMessage='Заполните форму и мы свяжемся с вами в ближайшее время'
                        />
                      </Text>
                    </Box>
                  </Column>
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
                <Layout flexBasis={52} flexShrink={0} />
                <Form arrow />
              </Condition>
              <Condition match={display === 'payment'}>
                <Box
                  width='100%'
                  flexDirection={['column', 'row', 'row']}
                  justifyContent={['start', 'space-between', 'space-between']}
                  alignItems='start'
                >
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

                <Box
                  backgroundColor='background.transparentWhite'
                  borderRadius='bigger'
                  width={263}
                >
                  <Layout flexBasis={5} flexShrink={0} />
                  <Column>
                    <Layout flexBasis={5} flexShrink={0} />
                    <Row>
                      <Switch active={roleVar}>
                        {options.map(({ value, mutuallyExclusive }) => (
                          <>
                            <Option
                              mutuallyExclusive={mutuallyExclusive}
                              value={value}
                              onSelect={setRole}
                              onUpdate={(active, push) => {
                                if (mutuallyExclusive && active.length === options.length - 1)
                                  push()
                              }}
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
                <Content />

                <Layout flexBasis={67} flexShrink={0} />
                <Form form='payment' />
              </Condition>
            </Column>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          </Box>
        </Container>
      </motion.div>
    </Renderer>
  )
}
export { ModalForms }
