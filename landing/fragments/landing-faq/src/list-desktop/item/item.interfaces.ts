export interface ItemProps {
  question: string
  answer: string
  positionVertical: 'top-start' | 'bottom-start'
  active: boolean
  setActive: (newState: boolean) => any
}
