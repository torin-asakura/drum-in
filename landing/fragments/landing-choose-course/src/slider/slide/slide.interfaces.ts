export interface SlideProps {
  title: string
  level?: string
  desc: string
  price: string
  squareRotate: number
  squarePositionX: number
  squarePositionY: number
  quantityVideoLessons: string
  circlePositionX?: number
  circlePositionY?: number
  circleFirstLine?: string
  circleSecondLine?: string
  rectangleRotate: number
  rectanglePositionX: number
  rectanglePositionY: number
  quantityMonths: string
  textMonths: string
  rectangleColor: string
  display: 'buy-package-of-courses' | 'buy-individual-course' | 'buy-individual-course-with-choice'
  titleModal: string
  courseContent?: {
    titles: Array<string>
    descriptions: Array<string>
    prices: Array<string>
  }
  finalPriceForOneTimePayment: string
  monthlyPayment?: string
  installmentDuration?: string
  finalPriceForInstallment?: string
  benefit?: string
}
