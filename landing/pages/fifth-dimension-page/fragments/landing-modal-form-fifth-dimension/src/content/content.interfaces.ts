import { IndividualCourseDataType } from '@globals/data/src'
import { RolePaymentForm }          from '@shared/utils/src'
import { SetStateAction }           from 'react'
import { Dispatch }                 from 'react'

export interface ContentProps {
  fifthDimensionData: IndividualCourseDataType
  onClose?: () => any
  roleVar: Array<RolePaymentForm>
  options: Array<{
    value: RolePaymentForm
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: Dispatch<SetStateAction<Array<RolePaymentForm>>>
}
