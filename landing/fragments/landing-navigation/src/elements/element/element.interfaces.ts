export interface ElementProps {
  stateHover: boolean
  title: string
  level?: string | null
  levelBackground?: string
  squareRotate?: number
  squarePositionX?: number
  squarePositionY?: number
  quantityVideoLessons?: number | null
  circlePositionX?: number
  circlePositionY?: number
  circleFirstLine?: string
  circleSecondLine?: string | JSX.Element
  rectangleRotate?: number
  rectanglePositionX?: number
  rectanglePositionY?: number
  quantityMonths?: number | null
  textMonths?: string | null
  rectangleColor?: string
  path: string
}
