import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Form }             from '@ui/form'
import { CrossMenuIcon }    from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Backdrop }         from './backdrop'
import { Container }        from './container'
import { ModalFormsProps }  from './modal-forms.interfaces'
import { Renderer }         from './renderer'

const ModalForms: FC<ModalFormsProps> = ({
  active,
  onClose,
  display = 'consultation',
  scroll = true,
}) => (
  <Renderer active={active}>
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
          </Column>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        </Box>
      </Container>
    </motion.div>
  </Renderer>
)
export { ModalForms }
