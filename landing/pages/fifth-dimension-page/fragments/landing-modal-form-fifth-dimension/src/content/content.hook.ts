import { useCallback }   from 'react'
import { useEffect }     from 'react'
import { useState }      from 'react'

import { RoleModalForm } from '../modal-form-fifth-dimension.enum'
import { Content }       from './content.interfaces'
import { ModalForm }     from './content.interfaces'

export const useContent = (roleVar: string, modalForm: ModalForm): Content => {
  const getAmount = useCallback((): number => {
    if (modalForm)
      return roleVar === RoleModalForm.OneTimePayment
        ? modalForm.finalPriceForOneTimePaymentNumber
        : modalForm.monthlyPaymentNumber
    return 0
  }, [roleVar, modalForm])

  const [amount, setAmount] = useState<number>(getAmount())

  useEffect(() => {
    setAmount(getAmount())
  }, [getAmount])

  return { amount }
}
