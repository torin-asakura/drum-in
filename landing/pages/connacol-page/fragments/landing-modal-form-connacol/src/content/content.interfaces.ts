import { SetStateAction }           from 'react'
import { Dispatch }                 from 'react'

import { PaymentSettingsDataProps } from '@globals/data'
import { IndividualCourseDataType } from '@globals/data'
import { RolePaymentForm }          from '@shared/constants'

export interface ContentProps {
  connacolData: IndividualCourseDataType
  paymentSettingsData: PaymentSettingsDataProps

  onClose?: () => any
  roleVar: Array<RolePaymentForm>
  options: Array<{
    value: RolePaymentForm
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: Dispatch<SetStateAction<Array<RolePaymentForm>>>
}
