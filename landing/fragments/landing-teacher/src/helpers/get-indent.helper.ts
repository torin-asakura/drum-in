const getIndent = (index) => {
  if (index === 0) return 68
  if (index === 1) return 106
  if (index === 2) return 0
  if (index === 3) return 68
  if (index === 4) return 160
  return 0
}

export { getIndent }
