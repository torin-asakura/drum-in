export interface SlideProps {
  title?: string | null
  level?: string
  desc?: string | null
  price: string
  squareRotate: number
  squarePositionX: number
  squarePositionY: number
  quantityVideoLessons?: number | null
  circlePositionX?: number
  circlePositionY?: number
  circleFirstLine?: number | null | string
  circleSecondLine?: string | JSX.Element | null
  rectangleRotate: number
  rectanglePositionX: number
  rectanglePositionY: number
  quantityMonths?: number | null
  textMonths?: string
  rectangleColor: string
  link?: string | null
}
