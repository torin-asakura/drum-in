const getUi = (idPage) => {
  if (idPage === '/opening-the-rhythm')
    return {
      gradientDesktop: 'transparentPurpleBlueImageGradient',
      gradientMobile: 'purpleBlueSmallImageGradient',
      components: 'AfterTheCourse',
    }
  if (idPage === '/feeling-of-time')
    return {
      gradientDesktop: 'transparentBlueTurquoiseImageGradient',
      gradientMobile: 'blueTurquoiseSmallImageGradient',
      components: 'TargetAudience',
    }
  if (idPage === '/fifth-dimension')
    return {
      gradientDesktop: 'transparentGreenBlueImageGradient',
      gradientMobile: 'greenBlueSmallImageGradient',
      components: 'TargetAudience',
    }

  return {
    gradientDesktop: 'transparentPurpleBlueImageGradient',
    gradientMobile: 'purpleBlueSmallImageGradient',
    components: 'AfterTheCourse',
  }
}

export { getUi }
