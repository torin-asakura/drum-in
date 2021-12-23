import { styleFn }                from 'styled-system'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

import { getPrimaryColorsStyles } from './abstract'

const getAppearanceColorStyles = ({theme}) => {
  const primaryColorsStyles = getPrimaryColorsStyles(theme)
  return switchProp(prop('color', 'primary'), {
    primary: primaryColorsStyles,
  })
}

export { getAppearanceColorStyles }
