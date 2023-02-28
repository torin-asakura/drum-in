export interface ModalForm {
  title: string
  courseContent: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  finalPriceForOneTimePayment: string
  monthlyPayment: string
  installmentDuration: string
  finalPriceForInstallment: string
  benefit: string
  pathPage: string
}
