export interface ContentProps {
  onClose?: () => any
  roleVar: Array<string>
  options: Array<{
    value: string
    label: string
    mutuallyExclusive: boolean
  }>
  setRole: (value: Array<string>) => any
}

export interface Content {
  amount: number
  recalculateAmount: (price: number, operation: boolean) => void
}

interface Course {
  description: string
  name: string
  price: number
}

export interface ModalForm {
  benefit: string
  finalPriceForInstallment: string
  finalPriceForInstallmentNumber: number
  finalPriceForOneTimePayment: string
  finalPriceForOneTimePaymentNumber: number
  installmentDuration: string
  monthlyPayment: string
  monthlyPaymentNumber: number
  title: string
  courses: Course[]
}
