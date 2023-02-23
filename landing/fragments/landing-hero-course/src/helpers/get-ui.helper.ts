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
  if (idPage === '/seventh-heaven')
    return {
      gradientDesktop: 'transparentPinkBlueImageGradient',
      gradientMobile: 'pinkBlueSmallImageGradient',
      components: 'TargetAudience',
      backgroundSize: '100%',
      backgroundPositionDesktop: 'center top',
      backgroundPositionMobile: 'center top',
    }
  if (idPage === '/connacol')
    return {
      gradientDesktop: 'transparentPurpleBlueImageGradient',
      gradientMobile: 'purpleBlueSmallImageGradient',
      components: 'Advantages',
      backgroundSize: '100%',
      backgroundPositionDesktop: 'center top',
      backgroundPositionMobile: 'center top',
    }
  if (idPage === '/polyrhythmic-keys')
    return {
      gradientDesktop: 'transparentPurpleBlueImageGradient',
      gradientMobile: 'purpleBlueSmallImageGradient',
      components: 'BannerWithoutTape',
      backgroundSize: '100%',
      backgroundPositionDesktop: 'center top',
      backgroundPositionMobile: 'center -60%',
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
