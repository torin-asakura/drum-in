import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'
import { styleFn }                from 'styled-system'

const normalSizeStyles = ({ theme }) => ({
  ...createShapeStyles({
    fontWeight: theme.fontWeights.normal,
    size: 70,
    fontSize: theme.fontSizes.normal,
    rounding: 0,
    paddingLeft: 10,
  })(),

  '& >input::placeholder': {
    // @ts-ignore
    ...createShapeStyles({
      fontSize: theme.fontSizes.large,
      fontWeight: theme.fontWeights.normal,
    })(),
  },
})

const smallSizeStyles = ({ theme }) => ({
  ...createShapeStyles({
    fontWeight: theme.fontWeights.normal,
    size: 42,
    fontSize: theme.fontSizes.mini,
    rounding: 0,
    paddingLeft: 10,
  })(),

  '& >input::placeholder': {
    // @ts-ignore
    ...createShapeStyles({
      fontSize: theme.fontSizes.mini,
      fontWeight: theme.fontWeights.normal,
    })(),
  },
})

export const baseStyles = createBaseStyles()

export const primaryColorsStyles = ({ theme }) => ({
  ...createAppearanceStyles({
    fontColor: theme.colors.input.primary.fontColor,
    backgroundColor: theme.colors.input.primary.default,
    borderColor: theme.colors.input.primary.borderColor,
  })(),

  '& >input::placeholder': {
    // @ts-ignore
    ...createAppearanceStyles({
      fontColor: theme.colors.fontColor,
    })(),
    lineHeight: theme.lineHeights.semiNormal,
  },
})

export const appearanceStyles = primaryColorsStyles

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: normalSizeStyles,
  small: smallSizeStyles,
})

export const fontStyles: styleFn = ({ theme }) => ({
  fontFamily: theme.fonts.primary,
})

export const transitionStyles = { transition: '.2s' }
