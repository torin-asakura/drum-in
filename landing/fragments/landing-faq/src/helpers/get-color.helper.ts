const getColor = (isOpen, active, elemHover) => {
  if (elemHover)
    return {
      background: 'background.smokyWhite',
      border: 'normalSmokyWhite',
      text: 'text.blackAmber',
      backgroundIcon: 'background.blackAmber',
      icon: 'rgb(242,242,242)',
    }
  if (isOpen)
    return {
      background: 'background.smokyWhite',
      border: 'normalSmokyWhite',
      text: 'text.blackAmber',
      backgroundIcon: 'background.blackAmber',
      icon: 'rgb(242,242,242)',
    }
  if (!isOpen && active)
    return {
      background: 'background.blackAmber',
      border: 'boldTransparentWhite',
      text: 'text.veryTransparentSmokyWhite',
      backgroundIcon: 'background.transparentWhite',
      icon: 'rgba(242, 242, 242, 0.15)',
    }

  return {
    background: 'background.smokyWhite',
    border: 'normalSmokyWhite',
    text: 'text.blackAmber',
    backgroundIcon: 'background.blackAmber',
    icon: 'rgb(242,242,242)',
  }
}

export { getColor }
