const getUi = (itemId) => {
  if (itemId === 'cG9zdDoyNjY=')
    return {
      squareRotate: -4,
      squarePositionX: 350,
      squarePositionY: 2,
      circlePositionX: 192,
      circlePositionY: 145,
      rectangleRotate: 7,
      rectanglePositionX: 2,
      rectanglePositionY: 27,
      rectangleColor: 'transparentPurpleGradient',
    }
  if (itemId === 'cG9zdDoyNjU=')
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
  if (itemId === 'cG9zdDoyNjQ=')
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
  if (itemId === 'cG9zdDoyNjM=')
    return {
      squareRotate: 0,
      squarePositionX: 207,
      squarePositionY: 135,
      circlePositionX: 369,
      circlePositionY: 2,
      rectangleRotate: -15,
      rectanglePositionX: 10,
      rectanglePositionY: 44,
      rectangleColor: 'transparentPinkGradient',
      levelBackground: 'pinkGradient',
    }
  if (itemId === 'cG9zdDoyNjI=')
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
  if (itemId === 'cG9zdDoyNjE=')
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
    squareRotate: 0,
    squarePositionX: 207,
    squarePositionY: 135,
    circlePositionX: 369,
    circlePositionY: 2,
    rectangleRotate: -15,
    rectanglePositionX: 10,
    rectanglePositionY: 44,
    rectangleColor: 'transparentPinkGradient',
  }
}

export { getUi }
