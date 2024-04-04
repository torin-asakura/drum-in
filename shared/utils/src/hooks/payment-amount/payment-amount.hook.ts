import {useCallback,useEffect,useState} from 'react'
import { UsePaymentAmountType }         from './payment-amount.interfaces'
import { RolePaymentForm }              from './payment-amount.constants'

export const usePaymentAmount:UsePaymentAmountType = (roleVar, installmentAmount, oneTimeAmount) => {

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
