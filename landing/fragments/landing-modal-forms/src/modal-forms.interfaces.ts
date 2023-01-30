export interface ModalFormsProps {
  activeRender: boolean
  onClose: () => any
  scroll?: boolean
  display?: 'buy-package-of-courses' | 'buy-individual-course' | 'buy-individual-course-with-choice'
  title?: string
  courseContent?: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  finalPriceForOneTimePayment?: string
  monthlyPayment?: string
  installmentDuration?: string
  finalPriceForInstallment?: string
  benefit?: string
}

export interface CurrentDataProps {
  display?: 'buy-package-of-courses' | 'buy-individual-course' | 'buy-individual-course-with-choice'
  title?: string
  courseContent?: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  finalPriceForOneTimePayment?: string
  monthlyPayment?: string
  installmentDuration?: string
  finalPriceForInstallment?: string
  benefit?: string
}
