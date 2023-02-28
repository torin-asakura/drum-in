const getUi = (idPage) => {
  if (idPage === '/opening-the-rhythm')
    return {
      gradientDesktop: 'transparentPurpleBlueImageGradient',
      gradientMobile: 'purpleBlueSmallImageGradient',
      components: 'AfterTheCourse',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center bottom',
    }
  if (idPage === '/feeling-of-time')
    return {
      gradientDesktop: 'transparentBlueTurquoiseImageGradient',
      gradientMobile: 'blueTurquoiseSmallImageGradient',
      components: 'TargetAudience',
      backgroundSize: '100%',
      backgroundPosition: 'center top',
    }

  return {
    gradientDesktop: 'transparentPurpleBlueImageGradient',
    gradientMobile: 'purpleBlueSmallImageGradient',
    components: 'AfterTheCourse',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center bottom',
  }
}

export { getUi }
