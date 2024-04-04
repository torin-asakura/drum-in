import { SetStateAction }  from 'react'
import { Dispatch }        from 'react'

import { RolePaymentForm } from '@shared/utils'

type Cb = () => any

export interface OptionProps {
  onSelect: Dispatch<SetStateAction<Array<RolePaymentForm>>>
  value: RolePaymentForm
  label?: string
  mutuallyExclusive?: boolean
  onUpdate?: (active: Array<string>, push: Cb, remove: Cb) => any
}
