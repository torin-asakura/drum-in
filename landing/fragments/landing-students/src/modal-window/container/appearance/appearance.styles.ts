import { styleFn } from 'styled-system'

const createAppearanceStyles = (): styleFn =>
  ({ theme }) => ({
    backgroundColor: theme.colors.background.blackAmber,
    borderTopLeftRadius: theme.radii.semiHuge,
    borderBottomLeftRadius: theme.radii.semiHuge,
  })

export { createAppearanceStyles }
