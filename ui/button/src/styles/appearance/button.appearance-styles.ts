import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceTransparentBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.default.background'),
  borderColor: prop('theme.colors.button.transparentBackground.default.border'),
})

const appearanceTransparentBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackground.hover.border'),
})

const appearanceTransparentBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackground.pressed.border'),
})

const appearanceTransparentBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackground.disabled.border'),
})

const appearanceTransparentBackgroundPurpleTextDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundPurpleText.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundPurpleText.default.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundPurpleText.default.border'),
})

const appearanceTransparentBackgroundPurpleTextHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundPurpleText.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundPurpleText.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundPurpleText.hover.border'),
})

const appearanceTransparentBackgroundPurpleTextPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundPurpleText.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundPurpleText.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundPurpleText.pressed.border'),
})

const appearanceTransparentBackgroundPurpleTextDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundPurpleText.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundPurpleText.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundPurpleText.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  transparentBackground: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundHoverStyles,
        appearanceTransparentBackgroundDefaultStyles
      )
    )
  ),
  transparentBackgroundPurpleText: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundPurpleTextDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundPurpleTextPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundPurpleTextHoverStyles,
        appearanceTransparentBackgroundPurpleTextDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
