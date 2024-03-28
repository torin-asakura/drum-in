import { IndividualCourseDataType } from '@globals/data/src'

export interface ContentProps {
  seventhHeavenData: IndividualCourseDataType

  onClose?: () => any
  roleVar: Array<string>
  options: Array<{
    value: string
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: (value: Array<string>) => any
}

export interface Content {
  amount: number
}
