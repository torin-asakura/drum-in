import { useCallback }               from 'react'
import { useEffect }                 from 'react'
import { useState }                  from 'react'

import { OpeningTheRhythmDataProps } from '@globals/data/src'

import { RoleModalForm }             from '../modal-form-opening-the-rhythm.enum'
import { Content }                   from './content.interfaces'

export const useContent = (
  roleVar: string,
  openingTheRhythm?: OpeningTheRhythmDataProps | null
): Content => {
  const getAmount = useCallback((): number => {
    if (openingTheRhythm) {
      if (roleVar === RoleModalForm.OneTimePayment) {
        return openingTheRhythm?.price?.priceFull || 0
      }
      const totalPrice = openingTheRhythm?.payment?.courses?.nodes.reduce(
        (acc, course) => acc + (course?.individualCourseData?.price?.fullPrice || 0),
        0
      )
      return totalPrice || 0
    }
    return 0
  }, [roleVar, openingTheRhythm])

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
