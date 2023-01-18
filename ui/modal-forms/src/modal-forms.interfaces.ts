export interface ModalFormsProps {
  activeRender: boolean
  onClose: () => any
  display?: 'consultation' | 'payment'
  scroll?: boolean
}

export type Role = Array<string>
