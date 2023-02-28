export interface IndividualCourseContentProps {
  onClose: () => any
  title?: string
  courseContent?: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  finalPriceForOneTimePayment?: string
}
