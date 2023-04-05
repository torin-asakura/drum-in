const getUi = (index) => {
  if (index === 0)
    return {
      verticalPositionFirstIcon: -70,
      horizontalPositionFirstIcon: 40,
      verticalPositionSecondIcon: -112,
      horizontalPositionSecondIcon: 220,
      rotateCard: -4,
    }
  if (index === 1)
    return {
      verticalPositionFirstIcon: -70,
      horizontalPositionFirstIcon: 40,
      verticalPositionSecondIcon: -115,
      horizontalPositionSecondIcon: 220,
      rotateCard: -4,
    }
  if (index === 2)
    return {
      verticalPositionFirstIcon: -90,
      horizontalPositionFirstIcon: 60,
      verticalPositionSecondIcon: -100,
      horizontalPositionSecondIcon: 265,
      rotateCard: 4,
    }
  if (index === 3)
    return {
      verticalPositionFirstIcon: -85,
      horizontalPositionFirstIcon: 80,
      verticalPositionSecondIcon: -110,
      horizontalPositionSecondIcon: 220,
      rotateCard: 4,
    }
  return {
    verticalPositionFirstIcon: 0,
    horizontalPositionFirstIcon: 0,
    verticalPositionSecondIcon: 0,
    horizontalPositionSecondIcon: 0,
    rotateCard: 0,
  }
}

export { getUi }
