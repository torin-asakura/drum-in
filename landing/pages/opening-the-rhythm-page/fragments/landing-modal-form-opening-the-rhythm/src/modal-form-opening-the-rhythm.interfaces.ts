import { OpeningTheRhythmDataProps } from '@globals/data/src'

export interface ModalFormOpeningTheRhythmProps {
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
  openingTheRhythm?: OpeningTheRhythmDataProps | null
}
