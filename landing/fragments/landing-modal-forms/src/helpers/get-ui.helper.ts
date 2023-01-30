type DisplayProps = (pathPage: string) => {
  display: 'buy-package-of-courses' | 'buy-individual-course' | 'buy-individual-course-with-choice'
}

const getUi: DisplayProps = (pathPage) => {
  if (pathPage === '/opening-the-rhythm')
    return {
      display: 'buy-package-of-courses',
    }
  if (pathPage === '/feeling-of-time')
    return {
      display: 'buy-individual-course-with-choice',
    }
  if (pathPage === '/fifth-dimension')
    return {
      display: 'buy-individual-course-with-choice',
    }
  if (pathPage === '/seventh-heaven')
    return {
      display: 'buy-individual-course-with-choice',
    }
  if (pathPage === '/connacol')
    return {
      display: 'buy-individual-course-with-choice',
    }
  if (pathPage === '/polyrhythmic-keys')
    return {
      display: 'buy-individual-course',
    }
  return {
    display: 'buy-individual-course',
  }
}

export { getUi }
