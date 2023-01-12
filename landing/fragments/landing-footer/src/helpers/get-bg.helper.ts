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

  return {
    gradientDesktop: 'purpleBlueSemicircleImage',
    gradientMobile: 'purpleBlueTwoSemicirclesSmallImage',
  }
}

export { getBg }
