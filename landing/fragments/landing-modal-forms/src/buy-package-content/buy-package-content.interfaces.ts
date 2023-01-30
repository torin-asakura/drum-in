export interface BuyPackageContentProps {
  onClose: () => any
  roleVar: Array<string>
  options: Array<{
    value: string
    mutuallyExclusive: boolean
  }>
  setRole: (value: Array<string>) => any
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
