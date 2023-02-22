export interface ItemProps {
  question: string
  answer: string
  positionVertical: 'top' | 'bottom'
  active: boolean
  setActive: (newState: boolean) => any
}
