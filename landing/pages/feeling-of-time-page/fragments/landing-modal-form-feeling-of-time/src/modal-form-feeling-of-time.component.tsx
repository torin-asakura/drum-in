import React                           from 'react'
import { FC }                          from 'react'
import { motion }                      from 'framer-motion'
import { useState }                    from 'react'
import { useIntl }                     from 'react-intl'

import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Container }                   from '@ui/modal'
import { Renderer }                    from '@ui/modal'
import { Backdrop }                    from '@ui/modal'

import { ContentDesktop }              from './content'
import { RoleModalForm }               from './modal-form-feeling-of-time.enum'
import { ModalFormFeelingOfTimeProps } from './modal-form-feeling-of-time.interfaces'

const ModalFormFeelingOfTime: FC<ModalFormFeelingOfTimeProps> = ({
  activeRender,
  onClose,
  scroll = true,
}) => {
  const [roleVar, setRole] = useState<Array<string>>([RoleModalForm.InstallmentPlan])
  const { formatMessage } = useIntl()
  const options = [
    {
      value: RoleModalForm.InstallmentPlan,
      label: formatMessage({
        id: 'landing_modal_forms.installment_plan',
        defaultMessage: 'Рассрочка',
      }),
      mutuallyExclusive: true,
    },
    {
      value: RoleModalForm.OneTimePayment,
      label: formatMessage({
        id: 'landing_modal_forms.one_time_payment',
        defaultMessage: 'Разовый платёж',
      }),
      mutuallyExclusive: true,
    },
  ]

  return (
    <Renderer active={activeRender}>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 900,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{
          position: 'fixed',
          right: '-100%',
          top: 0,
          height: '100%',
          zIndex: 950,
        }}
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
              <ContentDesktop
                onClose={onClose}
                roleVar={roleVar}
                options={options}
                setRole={setRole}
              />
            </Column>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          </Box>
        </Container>
      </motion.div>
    </Renderer>
  )
}

export { ModalFormFeelingOfTime }
