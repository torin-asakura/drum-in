export interface ModalFormsProps {
  active: boolean
  onClose: () => any
  display?: 'consultation' | 'payment'
  scroll?: boolean
}
