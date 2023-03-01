const getBg = (idPage) => {
  if (idPage === '/opening-the-rhythm')
    return {
      gradientDesktop: 'purpleBlueSemicircleImage',
      gradientMobile: 'purpleBlueTwoSemicirclesSmallImage',
    }
  if (idPage === '/feeling-of-time')
    return {
      gradientDesktop: 'blueTurquoiseSemicircleImage',
      gradientMobile: 'blueTurquoiseTwoSemicirclesSmallImage',
    }
  if (idPage === '/fifth-dimension')
    return {
      gradientDesktop: 'greenBlueSemicircleImage',
      gradientMobile: 'greenBlueTwoSemicirclesSmallImage',
    }
  if (idPage === '/seventh-heaven')
    return {
      gradientDesktop: 'pinkBlueSemicircleImage',
      gradientMobile: 'pinkBlueTwoSemicirclesSmallImage',
    }
  if (idPage === '/connacol')
    return {
      gradientDesktop: 'purpleBlueSemicircleImage',
      gradientMobile: 'purpleBlueTwoSemicirclesSmallImage',
    }

  return {
    gradientDesktop: 'purpleBlueSemicircleImage',
    gradientMobile: 'purpleBlueTwoSemicirclesSmallImage',
  }
}

export { getBg }
