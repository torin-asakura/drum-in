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

const appearanceDarkToPurpleBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkToPurpleBackground.default.font'),
  backgroundColor: prop('theme.colors.button.darkToPurpleBackground.default.background'),
  borderColor: prop('theme.colors.button.darkToPurpleBackground.default.border'),
})

const appearanceDarkToPurpleBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkToPurpleBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.darkToPurpleBackground.hover.background'),
  borderColor: prop('theme.colors.button.darkToPurpleBackground.hover.border'),
})

const appearanceDarkToPurpleBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkToPurpleBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.darkToPurpleBackground.pressed.background'),
  borderColor: prop('theme.colors.button.darkToPurpleBackground.pressed.border'),
})

const appearanceDarkToPurpleBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkToPurpleBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.darkToPurpleBackground.disabled.background'),
  borderColor: prop('theme.colors.button.darkToPurpleBackground.disabled.border'),
})

const appearancePurpleBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.purpleBackground.default.font'),
  backgroundColor: prop('theme.colors.button.purpleBackground.default.background'),
  borderColor: prop('theme.colors.button.purpleBackground.default.border'),
})

const appearancePurpleBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.purpleBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.purpleBackground.hover.background'),
  borderColor: prop('theme.colors.button.purpleBackground.hover.border'),
})

const appearancePurpleBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.purpleBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.purpleBackground.pressed.background'),
  borderColor: prop('theme.colors.button.purpleBackground.pressed.border'),
})

const appearancePurpleBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.purpleBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.purpleBackground.disabled.background'),
  borderColor: prop('theme.colors.button.purpleBackground.disabled.border'),
})

const appearanceWhiteBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackground.default.font'),
  backgroundColor: prop('theme.colors.button.whiteBackground.default.background'),
  borderColor: prop('theme.colors.button.whiteBackground.default.border'),
})

const appearanceWhiteBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.whiteBackground.hover.background'),
  borderColor: prop('theme.colors.button.whiteBackground.hover.border'),
})

const appearanceWhiteBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.whiteBackground.pressed.background'),
  borderColor: prop('theme.colors.button.whiteBackground.pressed.border'),
})

const appearanceWhiteBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.whiteBackground.disabled.background'),
  borderColor: prop('theme.colors.button.whiteBackground.disabled.border'),
})

const appearanceTransparentWhiteToPurpleBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.default.font'),
  backgroundColor: prop(
    'theme.colors.button.transparentWhiteToPurpleBackground.default.background'
  ),
  borderColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.default.border'),
})

const appearanceTransparentWhiteToPurpleBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.hover.background'),
  borderColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.hover.border'),
})

const appearanceTransparentWhiteToPurpleBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.pressed.font'),
  backgroundColor: prop(
    'theme.colors.button.transparentWhiteToPurpleBackground.pressed.background'
  ),
  borderColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.pressed.border'),
})

const appearanceTransparentWhiteToPurpleBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.disabled.font'),
  backgroundColor: prop(
    'theme.colors.button.transparentWhiteToPurpleBackground.disabled.background'
  ),
  borderColor: prop('theme.colors.button.transparentWhiteToPurpleBackground.disabled.border'),
})

const appearanceTransparentWhiteToGrayBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToGrayBackground.default.font'),
  backgroundColor: prop('theme.colors.button.transparentWhiteToGrayBackground.default.background'),
  borderColor: prop('theme.colors.button.transparentWhiteToGrayBackground.default.border'),
})

const appearanceTransparentWhiteToGrayBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToGrayBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentWhiteToGrayBackground.hover.background'),
  borderColor: prop('theme.colors.button.transparentWhiteToGrayBackground.hover.border'),
})

const appearanceTransparentWhiteToGrayBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToGrayBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentWhiteToGrayBackground.pressed.background'),
  borderColor: prop('theme.colors.button.transparentWhiteToGrayBackground.pressed.border'),
})

const appearanceTransparentWhiteToGrayBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentWhiteToGrayBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentWhiteToGrayBackground.disabled.background'),
  borderColor: prop('theme.colors.button.transparentWhiteToGrayBackground.disabled.border'),
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
  darkToPurpleBackground: ifProp(
    prop('disabled', false),
    appearanceDarkToPurpleBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDarkToPurpleBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceDarkToPurpleBackgroundHoverStyles,
        appearanceDarkToPurpleBackgroundDefaultStyles
      )
    )
  ),
  purpleBackground: ifProp(
    prop('disabled', false),
    appearancePurpleBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePurpleBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearancePurpleBackgroundHoverStyles,
        appearancePurpleBackgroundDefaultStyles
      )
    )
  ),
  whiteBackground: ifProp(
    prop('disabled', false),
    appearanceWhiteBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceWhiteBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceWhiteBackgroundHoverStyles,
        appearanceWhiteBackgroundDefaultStyles
      )
    )
  ),
  transparentWhiteToPurpleBackground: ifProp(
    prop('disabled', false),
    appearanceTransparentWhiteToPurpleBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentWhiteToPurpleBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentWhiteToPurpleBackgroundHoverStyles,
        appearanceTransparentWhiteToPurpleBackgroundDefaultStyles
      )
    )
  ),
  transparentWhiteToGrayBackground: ifProp(
    prop('disabled', false),
    appearanceTransparentWhiteToGrayBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentWhiteToGrayBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentWhiteToGrayBackgroundHoverStyles,
        appearanceTransparentWhiteToGrayBackgroundDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
