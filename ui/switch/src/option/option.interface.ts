import { SetStateAction }  from 'react'
import { Dispatch }        from 'react'

import { RolePaymentForm } from '@shared/constants'

type Cb = () => any

export interface OptionProps {
  onSelect: Dispatch<SetStateAction<Array<RolePaymentForm>>>
  value: RolePaymentForm
  label?: string
  mutuallyExclusive?: boolean
  onUpdate?: (active: Array<RolePaymentForm>, push: Cb, remove: Cb) => any
}
