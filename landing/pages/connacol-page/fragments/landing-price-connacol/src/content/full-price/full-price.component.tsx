import React                       from 'react'
import { FC }                      from 'react'
import { useState }                from 'react'

import { ModalFormConnacol }       from '@landing/modal-form-connacol'
import { ModalMobileFormConnacol } from '@landing/modal-form-connacol'
import { RolePaymentForm }         from '@shared/constants'
import { OneTimePaymentPrompt }    from '@ui/one-time-payment-prompt'

import { FullPriceProps }          from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ connacolData, fullCost }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const showDesktopModal = () => setVisibleModal(true)
  const showMobileModal = () => setVisibleModalMobile(true)
  return (
    <OneTimePaymentPrompt
      fullCost={fullCost}
      showDesktopModal={showDesktopModal}
      desktopModal={
        <ModalFormConnacol
          paymentPlan={RolePaymentForm.OneTimePayment}
          connacolData={connacolData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
      }
      showMobileModal={showMobileModal}
      mobileModal={
        <ModalMobileFormConnacol
          paymentPlan={RolePaymentForm.OneTimePayment}
          connacolData={connacolData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      }
    />
  )
}
export { FullPrice }
