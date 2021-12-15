import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getPrimaryColorsStyles = (): styleFn => {
  const primaryDefaultColorStyles: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.primary.fontColor'),
    backgroundColor: prop('theme.colors.button.primary.default'),
    borderColor: prop('theme.colors.button.primary.default'),
  })
  return primaryDefaultColorStyles
}

export { getPrimaryColorsStyles }
