import { useCallback }        from 'react'
import { useEffect }          from 'react'
import { useState }           from 'react'

import { RoleModalForm }      from '../modal-form-opening-the-rhythm.enum'
import { Content }            from './content.interfaces'

import { ModalForm } from './content.interfaces'

export const useContent = (roleVar: string, modalForm: ModalForm): Content => {
  const getAmount = useCallback((): number => {
    if (modalForm)
      return roleVar === RoleModalForm.OneTimePayment
        ? modalForm.courses.reduce((acc, course) => acc + course.price, 0)
        : modalForm.monthlyPaymentNumber
    return 0
  }, [roleVar, modalForm])

  const [amount, setAmount] = useState<number>(getAmount())

  const recalculateAmount = useCallback(
    (price: number, operation: boolean) => {
      setAmount((prevSatae) => (operation ? prevSatae + price : prevSatae - price))
    },
    [setAmount]
  )

  useEffect(() => {
    setAmount(getAmount())
  }, [getAmount])

  return { amount, recalculateAmount }
}
