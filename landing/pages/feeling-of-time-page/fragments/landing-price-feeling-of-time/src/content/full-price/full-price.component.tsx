import React                            from 'react'
import { FC }                           from 'react'
import { useState }                     from 'react'

import { ModalFormFeelingOfTime }       from '@landing/modal-form-feeling-of-time'
import { ModalMobileFormFeelingOfTime } from '@landing/modal-form-feeling-of-time'
import { RolePaymentForm }              from '@shared/constants/src'
import { OneTimePaymentPrompt }         from '@ui/one-time-payment-prompt'

import { FullPriceProps }               from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ feelingOfTimeData, fullCost }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const showDesktopModal = () => setVisibleModal(true)
  const showMobileModal = () => setVisibleModalMobile(true)
  return (
    <OneTimePaymentPrompt
      fullCost={fullCost}
      showDesktopModal={showDesktopModal}
      desktopModal={
        <ModalFormFeelingOfTime
          paymentPlan={RolePaymentForm.OneTimePayment}
          feelingOfTimeData={feelingOfTimeData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
      }
      showMobileModal={showMobileModal}
      mobileModal={
        <ModalMobileFormFeelingOfTime
          paymentPlan={RolePaymentForm.OneTimePayment}
          feelingOfTimeData={feelingOfTimeData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      }
    />
  )
}
export { FullPrice }
