import { RolePaymentForm } from './payment-amount.constants'

export type UsePaymentAmountType = (
  roleVar: RolePaymentForm,
  installmentAmount?: number | null,
  oneTimeAmount?: number | null
) => { amount: number }
