import React                      from 'react'
import { FC }                     from 'react'
import { motion }                 from 'framer-motion'
import { useState }               from 'react'
import { useIntl }                from 'react-intl'

import { ContainerMobile }        from '@ui/modal'
import { Renderer }               from '@ui/modal'
import { Backdrop }               from '@ui/modal'

import { ContentMobile }          from './content'
import { ModalFormConnacolProps } from './modal-form-connacol.interfaces'

const ModalMobileFormConnacol: FC<ModalFormConnacolProps> = ({
  activeRender,
  onClose,
  scroll = true,
}) => {
  const [roleVar, setRole] = useState<Array<string>>(['Рассрочка'])
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
          <ContentMobile roleVar={roleVar} options={options} setRole={setRole} />
        </ContainerMobile>
      </motion.div>
    </Renderer>
  )
}
export { ModalMobileFormConnacol }