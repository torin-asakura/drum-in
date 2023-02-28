export interface ContentOneTimePaymentProps {
  courseContent?: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  finalPriceForOneTimePayment?: string
}
