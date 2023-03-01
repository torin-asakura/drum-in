const getUi = (idPage) => {
  if (idPage === '/opening-the-rhythm')
    return {
      gradientDesktop: 'transparentPurpleBlueImageGradient',
      gradientMobile: 'purpleBlueSmallImageGradient',
      components: 'AfterTheCourse',
      backgroundSize: '100% 100%',
      backgroundPositionDesktop: 'center bottom',
      backgroundPositionMobile: 'right center',
    }
  if (idPage === '/feeling-of-time')
    return {
      gradientDesktop: 'transparentBlueTurquoiseImageGradient',
      gradientMobile: 'blueTurquoiseSmallImageGradient',
      components: 'TargetAudience',
      backgroundSize: '100%',
      backgroundPositionDesktop: 'center top',
      backgroundPositionMobile: 'center top',
    }
  if (idPage === '/fifth-dimension')
    return {
      gradientDesktop: 'transparentGreenBlueImageGradient',
      gradientMobile: 'greenBlueSmallImageGradient',
      components: 'TargetAudience',
      backgroundSize: '100%',
      backgroundPositionDesktop: 'center top',
      backgroundPositionMobile: 'center top',
    }

  return {
    gradientDesktop: 'transparentPurpleBlueImageGradient',
    gradientMobile: 'purpleBlueSmallImageGradient',
    components: 'AfterTheCourse',
    backgroundSize: '100% 100%',
    backgroundPositionDesktop: 'center bottom',
    backgroundPositionMobile: 'right center',
  }
}

export { getUi }
