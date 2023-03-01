const getUi = (idPage) => {
  if (idPage === '/opening-the-rhythm')
    return {
      backgroundRectangle: 'transparentPurpleGradient',
      squareRotate: 20,
      circleRotate: -20,
      rectangleRotate: -30,
      rectanglePositionX: 0,
      rectanglePositionY: 79,
    }
  if (idPage === '/feeling-of-time')
    return {
      backgroundRectangle: 'transparentBlueGradient',
      squareRotate: -20,
      circleRotate: 20,
      rectangleRotate: -20,
      rectanglePositionX: 3.5,
      rectanglePositionY: 54,
    }
  if (idPage === '/fifth-dimension')
    return {
      backgroundRectangle: 'transparentGreenGradient',
      squareRotate: -20,
      circleRotate: 20,
      rectangleRotate: -20,
      rectanglePositionX: 3.5,
      rectanglePositionY: 54,
    }
  if (idPage === '/seventh-heaven')
    return {
      backgroundRectangle: 'transparentPinkGradient',
      squareRotate: -20,
      circleRotate: 20,
      rectangleRotate: -20,
      rectanglePositionX: 3.5,
      rectanglePositionY: 54,
    }

  return {
    backgroundRectangle: 'transparentPurpleGradient',
    squareRotate: 20,
    circleRotate: -20,
    rectangleRotate: -30,
    rectanglePositionX: 0,
    rectanglePositionY: 79,
  }
}

export { getUi }
