import { CourseID } from '@globals/data'

const getUi = (itemId: string | undefined) => {
  if (itemId === CourseID.FEELING_OF_TIME)
    return {
      squareRotate: 10,
      squarePositionX: 12,
      squarePositionY: 30,
      circlePositionX: 202,
      circlePositionY: 1,
      rectangleRotate: -8,
      rectanglePositionX: 218,
      rectanglePositionY: 172,
      rectangleColor: 'transparentBlueGradient',
      levelBackground: 'blueGradient',
    }
  if (itemId === CourseID.FIFTH_DIMENSION)
    return {
      squareRotate: 0,
      squarePositionX: 2,
      squarePositionY: 1,
      circlePositionX: 400,
      circlePositionY: 121,
      rectangleRotate: -15,
      rectanglePositionX: 195,
      rectanglePositionY: 45,
      rectangleColor: 'transparentGreenGradient',
      levelBackground: 'greenGradient',
    }
  if (itemId === CourseID.SEVENTH_HEAVEN)
    return {
      squareRotate: 0,
      squarePositionX: 207,
      squarePositionY: 135,
      circlePositionX: 370,
      circlePositionY: 2,
      rectangleRotate: -15,
      rectanglePositionX: 10,
      rectanglePositionY: 44,
      rectangleColor: 'transparentPinkGradient',
      levelBackground: 'pinkGradient',
    }
  if (itemId === CourseID.CONNACOL)
    return {
      squareRotate: 15,
      squarePositionX: 25,
      squarePositionY: 112,
      circlePositionX: 203,
      circlePositionY: 1,
      rectangleRotate: -15,
      rectanglePositionX: 227,
      rectanglePositionY: 163,
      rectangleColor: 'transparentPurpleGradient',
    }
  if (itemId === CourseID.POLYRYTHMIC_KEYS)
    return {
      squareRotate: 0,
      squarePositionX: 368,
      squarePositionY: 0,
      rectangleRotate: 10,
      rectanglePositionX: 2,
      rectanglePositionY: 35,
      rectangleColor: 'transparentPurpleGradient',
    }

  return {
    squareRotate: -4,
    squarePositionX: 372,
    squarePositionY: 2,
    circlePositionX: 218,
    circlePositionY: 145,
    rectangleRotate: 7,
    rectanglePositionX: 2,
    rectanglePositionY: 27,
    rectangleColor: 'transparentPurpleGradient',
  }
}

export { getUi }
