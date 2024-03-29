import { useCallback }   from 'react'
import { useEffect }     from 'react'
import { useState }      from 'react'

import { RoleModalForm } from '../modal-form-feeling-of-time.enum'
import { Content }       from './content.interfaces'

export const useContent = (roleVar: string, installmentPlan, oneTimePayment): Content => {
  const getAmount = useCallback((): number => {
    if (installmentPlan && oneTimePayment)
      return roleVar === RoleModalForm.OneTimePayment ? oneTimePayment : installmentPlan
    return 0
  }, [roleVar, installmentPlan, oneTimePayment])

  const [amount, setAmount] = useState<number>(getAmount())

  useEffect(() => {
    setAmount(getAmount())
  }, [getAmount])

  return { amount }
}
