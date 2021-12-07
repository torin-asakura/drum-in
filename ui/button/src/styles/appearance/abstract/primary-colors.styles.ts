import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'

const getPrimaryColorsStyles = (): styleFn => {
  const primaryDefaultCOlorStyles: styleFn = createAppearanceStyles({
    fontColor: 'white',
    backgroundColor: 'red',
    borderColor: 'red',
  })
  return primaryDefaultCOlorStyles
}

export { getPrimaryColorsStyles }
