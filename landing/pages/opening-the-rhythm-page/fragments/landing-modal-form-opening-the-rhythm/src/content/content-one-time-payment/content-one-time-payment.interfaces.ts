export interface ContentOneTimePaymentProps {
  amount: number
  recalculate: (price: number, operation: boolean) => void
}
