const getUi = (idPage) => {
  if (idPage === '/polyrhythmic-keys') return 'WithoutInstallments'

  return 'WithInstallments'
}

export { getUi }
