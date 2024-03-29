export interface SlideLevelProps {
  title?: string | null
  level: string
  desc?: string | null
  price: string
  squareRotate: number
  squarePositionX: number
  squarePositionY: number
  quantityVideoLessons?: number | null
  circlePositionX?: number
  circlePositionY?: number
  circleFirstLine?: string | null | number
  circleSecondLine?: string | JSX.Element | null
  rectangleRotate: number
  rectanglePositionX: number
  rectanglePositionY: number
  quantityMonths?: number | null
  textMonths?: string | null
  rectangleColor: string
  link?: string | null
}
