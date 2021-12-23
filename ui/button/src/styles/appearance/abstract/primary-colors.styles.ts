import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getPrimaryColorsStyles = ({theme}) => {
  const primaryDefaultColorStyles: styleFn = createAppearanceStyles({
    fontColor: theme.colors.button.primary.fontColor,
    backgroundColor: theme.colors.button.primary.default,
    borderColor: theme.colors.button.primary.default,
  })
  return primaryDefaultColorStyles
}

export { getPrimaryColorsStyles }

