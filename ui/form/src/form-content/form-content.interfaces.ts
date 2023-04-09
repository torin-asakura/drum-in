export interface FormContentProps {
  arrow: boolean
  form: 'consultation' | 'payment'
  onSuccess: (...args) => any
  onFailure: (...args) => any
}
