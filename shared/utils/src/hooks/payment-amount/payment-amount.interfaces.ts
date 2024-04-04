import { RolePaymentForm } from '@shared/constants'

export type UsePaymentAmountType = (
  roleVar: RolePaymentForm,
  installmentAmount?: number | null,
  oneTimeAmount?: number | null
) => { amount: number }
