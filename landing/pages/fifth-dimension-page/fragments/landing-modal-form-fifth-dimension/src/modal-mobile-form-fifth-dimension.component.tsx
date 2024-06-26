import React                            from 'react'
import { FC }                           from 'react'
import { motion }                       from 'framer-motion'
import { useState }                     from 'react'
import { useIntl }                      from 'react-intl'

import { RolePaymentForm }              from '@shared/constants'
import { ContainerMobile }              from '@ui/modal'
import { Renderer }                     from '@ui/modal'
import { Backdrop }                     from '@ui/modal'

import { ContentMobile }                from './content'
import { ModalFormFifthDimensionProps } from './modal-form-fifth-dimension.interfaces'

const ModalMobileFormFifthDimension: FC<ModalFormFifthDimensionProps> = ({
  paymentPlan,
  activeRender,
  onClose,
  scroll = true,
  fifthDimensionData,
}) => {
  const [roleVar, setRole] = useState<Array<RolePaymentForm>>(
    paymentPlan ? [paymentPlan] : [RolePaymentForm.InstallmentPlan]
  )
  const { formatMessage } = useIntl()
  const options = [
    {
      value: RolePaymentForm.InstallmentPlan,
      label: formatMessage({
        id: 'landing_modal_forms.installment_plan',
      }),
      mutuallyExclusive: true,
    },
    {
      value: RolePaymentForm.OneTimePayment,
      label: formatMessage({
        id: 'landing_modal_forms.one_time_payment',
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
          bottom: '-100%',
          left: 0,
          width: '100%',
          zIndex: 950,
        }}
        animate={{ bottom: 0 }}
        exit={{ bottom: '-100%' }}
        transition={{ duration: 0.5 }}
        id='modal-form-mobile'
      >
        <ContainerMobile scroll={scroll}>
          <ContentMobile
            onClose={onClose}
            fifthDimensionData={fifthDimensionData}
            roleVar={roleVar}
            options={options}
            setRole={setRole}
          />
        </ContainerMobile>
      </motion.div>
    </Renderer>
  )
}
export { ModalMobileFormFifthDimension }
