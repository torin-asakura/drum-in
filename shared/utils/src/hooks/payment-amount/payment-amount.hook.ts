import { useCallback }          from 'react'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { RolePaymentForm }      from '@shared/constants'

import { UsePaymentAmountType } from './payment-amount.interfaces'

export const usePaymentAmount: UsePaymentAmountType = (
  roleVar,
  installmentAmount,
  oneTimeAmount
) => {
  const getAmount = useCallback((): number => {
    if (installmentAmount && oneTimeAmount)
      return roleVar === RolePaymentForm.InstallmentPlan ? installmentAmount : oneTimeAmount
    return 0
  }, [roleVar, installmentAmount, oneTimeAmount])

  const [amount, setAmount] = useState<number>(getAmount())

  useEffect(() => {
    setAmount(getAmount())
  }, [getAmount])

  return { amount }
}
