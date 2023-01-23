export interface ModalFormsProps {
  activeRender: boolean
  onClose: () => any
  display?: 'consultation' | 'payment'
  scroll?: boolean
  typePayment?: 'Разовый платёж' | 'Рассрочка'
}

export type Role = Array<string>
