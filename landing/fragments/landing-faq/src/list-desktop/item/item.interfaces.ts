export interface ItemProps {
  question: string
  answer: string
  positionVertical: 'top' | 'bottom'
  width: number
  active: boolean
  setActive: (newState: boolean) => any
}