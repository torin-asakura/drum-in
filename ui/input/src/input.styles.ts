import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'
import { ifProp }                 from 'styled-tools'

const normalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 500,
  size: 60,
  fontSize: 20,
  rounding: 12,
  paddingLeft: 20,
})

const smallSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 500,
  size: 48,
  fontSize: 16,
  rounding: 8,
  paddingLeft: 12,
})

export const baseStyles = createBaseStyles()

export const primaryColorsStyles = ({ theme }) => ({
  ...createAppearanceStyles({
    fontColor: theme.colors.input.font,
    backgroundColor: theme.colors.input.background,
    borderColor: theme.colors.input.border,
  })(),
  '&:hover': {
    ...createAppearanceStyles({
      fontColor: theme.colors.input.font,
      backgroundColor: theme.colors.input.background,
      borderColor: theme.colors.input.hover,
    })(),
  },
  '&:focus-within': {
    ...createAppearanceStyles({
      fontColor: theme.colors.input.font,
      backgroundColor: theme.colors.input.background,
      borderColor: theme.colors.input.focus,
    })(),
  },
  '&:active': {
    ...createAppearanceStyles({
      fontColor: theme.colors.input.font,
      backgroundColor: theme.colors.input.background,
      borderColor: theme.colors.input.press,
    })(),
  },
})

export const errorColorsStyles = createAppearanceStyles({
  fontColor: ({ theme }) => theme.colors.input.font,
  backgroundColor: ({ theme }) => theme.colors.input.background,
  borderColor: ({ theme }) => theme.colors.input.error,
})

export const appearanceStyles = ifProp('error', errorColorsStyles, primaryColorsStyles)

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: normalSizeStyles,
  small: smallSizeStyles,
})

export const transitionStyles = { transition: '.2s' }
