const getColorBackground = (isOpen, active, elemHover) => {
  if (elemHover) return 'background.smokyWhite'
  if (isOpen) return 'background.smokyWhite'
  if (!isOpen && active) return 'background.blackAmber'

  return 'background.smokyWhite'
}
const getColorBorder = (isOpen, active, elemHover) => {
  if (elemHover) return 'normalSmokyWhite'
  if (isOpen) return 'normalSmokyWhite'
  if (!isOpen && active) return 'boldTransparentWhite'

  return 'normalSmokyWhite'
}
const getColorText = (isOpen, active, elemHover) => {
  if (elemHover) return 'text.blackAmber'
  if (isOpen) return 'text.blackAmber'
  if (!isOpen && active) return 'text.veryTransparentSmokyWhite'

  return 'text.blackAmber'
}
const getColorBackgroundIcon = (isOpen, active, elemHover) => {
  if (elemHover) return 'background.blackAmber'
  if (isOpen) return 'background.blackAmber'
  if (!isOpen && active) return 'background.transparentWhite'

  return 'background.blackAmber'
}
const getColorIcon = (isOpen, active, elemHover) => {
  if (elemHover) return 'rgb(242,242,242)'
  if (isOpen) return 'rgb(242,242,242)'
  if (!isOpen && active) return 'rgba(242, 242, 242, 0.15)'

  return 'rgb(242,242,242)'
}

export { getColorBackground, getColorBackgroundIcon, getColorBorder, getColorText, getColorIcon }
