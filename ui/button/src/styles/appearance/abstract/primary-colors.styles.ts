import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getPrimaryColorsStyles = (): styleFn => {
  const primaryDefaultColorStyles: styleFn = createAppearanceStyles({
    fontColor: 'white',
    backgroundColor: prop('theme.colors.button.primary.default'),
    borderColor: 'red',
  })
  return primaryDefaultColorStyles
}

export { getPrimaryColorsStyles }
