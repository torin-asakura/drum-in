export interface ContentInstallmentPlanProps {
  courseContent?: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  monthlyPayment?: string
  installmentDuration?: string
  finalPriceForInstallment?: string
}
