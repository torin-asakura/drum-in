export interface FormProps {
  amount?: number
  arrow?: boolean
  form?: 'consultation' | 'payment'
  onSuccess?: (...args) => any
  onFailure?: (...args) => any
}
