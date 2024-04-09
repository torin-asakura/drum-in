import { createContext }   from 'react'

import { RolePaymentForm } from '@shared/constants'

const Context = createContext<Array<RolePaymentForm>>([RolePaymentForm.InstallmentPlan])

export { Context }
