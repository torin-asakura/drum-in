import { styleFn }                from 'styled-system'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

import { getPrimaryColorsStyles } from './abstract'

const getAppearanceColorStyles = (): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles()
  return switchProp(prop('color', 'primary'), {
    primary: primaryColorsStyles,
  })
}

export { getAppearanceColorStyles }
