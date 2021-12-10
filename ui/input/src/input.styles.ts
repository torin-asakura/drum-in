import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const normalSizeStyles = createShapeStyles({
  fontWeight: 400,
  size: 62,
  fontSize: 16,
  rounding: 0,
  paddingLeft: 1,
})

export const baseStyles = createBaseStyles()

export const primaryColorsStyles = () => ({
  ...createAppearanceStyles({
    fontColor: 'black',
    backgroundColor: 'green',
    borderColor: 'red',
  })(),
})

export const appearanceStyles = primaryColorsStyles

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: normalSizeStyles,
})

export const transitionStyles = { transition: '.2s' }
