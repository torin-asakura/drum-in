import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ModalFormOpeningTheRhythmProps {
  isOneTimePaymentPlan?:boolean
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
  openingTheRhythm?: OpeningTheRhythmDataProps | null
}
