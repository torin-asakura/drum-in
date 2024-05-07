import React                             from 'react'
import { FC }                            from 'react'
import { useState }                      from 'react'

import { ModalFormFifthDimension }       from '@landing/modal-form-fifth-dimension'
import { ModalMobileFormFifthDimension } from '@landing/modal-form-fifth-dimension'
import { RolePaymentForm }               from '@shared/constants/src'
import { OneTimePaymentPrompt }          from '@ui/one-time-payment-prompt'

import { FullPriceProps }                from './full-price.interfaces'

export const FullPrice: FC<FullPriceProps> = ({ fifthDimensionData, fullCost }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const showDesktopModal = () => setVisibleModal(true)
  const showMobileModal = () => setVisibleModalMobile(true)

  return (
    <OneTimePaymentPrompt
      fullCost={fullCost}
      showDesktopModal={showDesktopModal}
      desktopModal={
        <ModalFormFifthDimension
          paymentPlan={RolePaymentForm.OneTimePayment}
          fifthDimensionData={fifthDimensionData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
      }
      showMobileModal={showMobileModal}
      mobileModal={
        <ModalMobileFormFifthDimension
          paymentPlan={RolePaymentForm.OneTimePayment}
          fifthDimensionData={fifthDimensionData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      }
    />
  )
}
