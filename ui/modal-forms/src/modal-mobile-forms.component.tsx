import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'

import { Condition }        from '@ui/condition'
import { Form }             from '@ui/form'
import { RoundedLineIcon }  from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Backdrop }         from './backdrop'
import { ContainerMobile }  from './container'
import { ModalFormsProps }  from './modal-forms.interfaces'
import { Renderer }         from './renderer'

const ModalMobileForms: FC<ModalFormsProps> = ({
  activeRender,
  onClose,
  display = 'consultation',
  scroll = true,
}) => (
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
      style={{ position: 'fixed', bottom: '-100%', left: 0, width: '100%', zIndex: 9999 }}
      animate={{ bottom: 0 }}
      exit={{ bottom: '-100%' }}
      transition={{ duration: 0.5 }}
      id='modal-form-mobile'
    >
      <ContainerMobile scroll={scroll}>
        <Condition match={display === 'consultation'}>
          <Row height={472}>
            <Layout flexBasis={20} flexShrink={0} />
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
            <Layout flexBasis={20} flexShrink={0} />
          </Row>
        </Condition>
      </ContainerMobile>
    </motion.div>
  </Renderer>
)
export { ModalMobileForms }
