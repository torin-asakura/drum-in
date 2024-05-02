import React                            from 'react'
import { FC }                           from 'react'
import { useState }                     from 'react'

import { ModalFormSeventhHeaven }       from '@landing/modal-form-seventh-heaven'
import { ModalMobileFormSeventhHeaven } from '@landing/modal-form-seventh-heaven'
import { RolePaymentForm }              from '@shared/constants/src'
import { OneTimePaymentPrompt }         from '@ui/one-time-payment-prompt'

import { FullPriceProps }               from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ seventhHeavenData, fullCost, paymentSettingsData }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const showDesktopModal = () => setVisibleModal(true)
  const showMobileModal = () => setVisibleModalMobile(true)
  return (
    <OneTimePaymentPrompt
      fullCost={fullCost}
      showDesktopModal={showDesktopModal}
      desktopModal={
        <ModalFormSeventhHeaven
          paymentSettingsData={paymentSettingsData}
          paymentPlan={RolePaymentForm.OneTimePayment}
          seventhHeavenData={seventhHeavenData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
      }
      showMobileModal={showMobileModal}
      mobileModal={
        <ModalMobileFormSeventhHeaven
          paymentSettingsData={paymentSettingsData}
          paymentPlan={RolePaymentForm.OneTimePayment}
          seventhHeavenData={seventhHeavenData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      }
    />
  )
}
export { FullPrice }
