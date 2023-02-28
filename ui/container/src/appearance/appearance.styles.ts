import { styleFn } from 'styled-system'

const createAppearanceStyles = (): styleFn =>
  ({ theme }) => ({
    backgroundColor: theme.colors.background.blackAmber,
    borderTopLeftRadius: theme.radii.semiHuge,
    borderBottomLeftRadius: theme.radii.semiHuge,
  })

const createAppearanceMobileStyles = (): styleFn =>
  ({ theme }) => ({
    backgroundColor: theme.colors.background.blackAmber,
    borderTopLeftRadius: theme.radii.extra,
    borderTopRightRadius: theme.radii.extra,
  })

export { createAppearanceStyles, createAppearanceMobileStyles }
