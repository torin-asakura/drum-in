import { useCallback }               from 'react'
import { useEffect }                 from 'react'
import { useState }                  from 'react'

import { OpeningTheRhythmDataProps } from '@globals/data/src'
import { RolePaymentForm }           from '@shared/constants'

import { Content }                   from './content.interfaces'

export const useContent = (
  roleVar: string,
  openingTheRhythm?: OpeningTheRhythmDataProps | null
): Content => {
  const getAmount = useCallback((): number => {
    if (openingTheRhythm) {
      if (roleVar === RolePaymentForm.OneTimePayment) {
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
      setAmount((prevState) => (operation ? prevState + price : prevState - price))
    },
    [setAmount]
  )

  const totalMonths = openingTheRhythm?.payment?.courses?.nodes.reduce(
    (acc, course) => acc + (course?.individualCourseData?.price?.courseLengthInMonths || 0),
    0
  )

  const [months, setMonths] = useState<number>(totalMonths || 0)
  const recalculateMonths = useCallback(
    (number, operation) => {
      setMonths((prevState) => (operation ? prevState + number : prevState - number))
    },
    [setMonths]
  )

  useEffect(() => {
    setAmount(getAmount())
    setMonths(totalMonths || 0)
  }, [getAmount, totalMonths])

  return { amount, recalculateAmount, months, recalculateMonths }
}
