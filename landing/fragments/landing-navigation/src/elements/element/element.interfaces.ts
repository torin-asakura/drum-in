export interface ElementProps {
  stateHover: boolean
  title?: string | null
  level?: string | null
  levelBackground?: string
  squareRotate?: number
  squarePositionX?: number
  squarePositionY?: number
  quantityVideoLessons?: number | null
  circlePositionX?: number
  circlePositionY?: number
  circleFirstLine?: string | number | null
  circleSecondLine?: string | JSX.Element | null
  rectangleRotate?: number
  rectanglePositionX?: number
  rectanglePositionY?: number
  quantityMonths?: number | null
  textMonths?: string | null
  rectangleColor?: string
  path?: string | null
}
