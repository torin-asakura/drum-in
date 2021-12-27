import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createBaseStyles }       from '@atls-ui-parts/button'
import { combine }                from '@atls-ui-parts/styles'
import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

export const baseStyles = createBaseStyles({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  wordBreak: 'break-word',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  border: '0px solid transparent',
  transition: 'background-color 0.2s',
})
export const primaryAppearanceStyles = createAppearanceStyles({
  fontColor: ({ theme }) => theme.colors.white,
  backgroundColor: ({ theme }) => theme.colors.dullRed,
  borderColor: ({ theme }) => theme.colors.dullRed,
})
export const ghostAppearanceStyles = createAppearanceStyles({
  fontColor: ({ theme }) => theme.colors.transparent,
  backgroundColor: ({ theme }) => theme.colors.transparent,
  borderColor: ({ theme }) => theme.colors.transparent,
})

export const primaryHoverAppearanceStyles = (props) => ({
  '&:hover': createAppearanceStyles({
    fontColor: ({ theme }) => theme.colors.white,
    backgroundColor: ({ theme }) => theme.colors.duskRed,
    borderColor: ({ theme }) => theme.colors.duskRed,
  })(props),
})

export const normalSizeStyles = createShapeStyles({
  size: 40,
  fontSize: ({ theme }) => theme.fontSizes.default,
})
export const bigSizeStyles = createShapeStyles({
  size: 70,
  fontSize: ({ theme }) => theme.fontSizes.default,
})
export const ghostSizeStyles = createShapeStyles({
  size: 0,
  fontSize: ({ theme }) => theme.fontSizes.default,
})

export const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: combine(primaryAppearanceStyles, primaryHoverAppearanceStyles),
})

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: normalSizeStyles,
  big: bigSizeStyles,
  ghost: ghostSizeStyles,
})
