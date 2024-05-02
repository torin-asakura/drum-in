import React                               from 'react'
import { FC }                              from 'react'
import { useState }                        from 'react'

import { ModalFormOpeningTheRhythm }       from '@landing/modal-form-opening-the-rhythm'
import { ModalMobileFormOpeningTheRhythm } from '@landing/modal-form-opening-the-rhythm'
import { OneTimePaymentPrompt }            from '@ui/one-time-payment-prompt'

import { FullPriceProps }                  from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ openingTheRhythm, fullCost, paymentSettingsData }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const showDesktopModal = () => setVisibleModal(true)
  const showMobileModal = () => setVisibleModalMobile(true)

  return (
    <OneTimePaymentPrompt
      fullCost={fullCost}
      showDesktopModal={showDesktopModal}
      desktopModal={
        <ModalFormOpeningTheRhythm
          paymentSettingsData={paymentSettingsData}
          isOneTimePaymentPlan
          openingTheRhythm={openingTheRhythm}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
      }
      showMobileModal={showMobileModal}
      mobileModal={
        <ModalMobileFormOpeningTheRhythm
          paymentSettingsData={paymentSettingsData}
          isOneTimePaymentPlan
          openingTheRhythm={openingTheRhythm}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      }
    />
  )
}
export { FullPrice }
