import { SetStateAction }           from 'react'
import { Dispatch }                 from 'react'

import { IndividualCourseDataType } from '@globals/data'
import { RolePaymentForm }          from '@shared/constants'

export interface ContentProps {
  connacolData: IndividualCourseDataType

  onClose?: () => any
  roleVar: Array<RolePaymentForm>
  options: Array<{
    value: RolePaymentForm
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: Dispatch<SetStateAction<Array<RolePaymentForm>>>
}
