const getUi = (counter) => {
  if (counter === '01')
    return {
      rotate: -5,
      valueTopIndentation: 0,
    }
  if (counter === '02')
    return {
      rotate: 0,
      valueTopIndentation: 72,
    }
  if (counter === '03')
    return {
      rotate: 8,
      valueTopIndentation: 0,
    }
  if (counter === '04')
    return {
      rotate: 3,
      valueTopIndentation: 179,
    }

  return {
    rotate: 0,
    valueTopIndentation: 0,
  }
}

export { getUi }
