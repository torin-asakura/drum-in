import { createBaseStyles }       from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { combine } from '@atls-ui-parts/styles'
import { prop } from 'styled-tools'
import { switchProp } from 'styled-tools'

export const baseStyles = createBaseStyles()

export const primaryAppearanceStyles = createAppearanceStyles({
  fontColor: ({ theme }) =>  theme.colors.dullRed,
  backgroundColor: ({ theme }) => theme.colors.dullRed,
  borderColor: ({ theme }) => theme.colors.dullRed,
})

export const primaryHoverAppearanceStyles = (props) => ({
  '&:hover': createAppearanceStyles({
    fontColor: ({ theme }) =>
   theme.colors.dullRed,
    backgroundColor: ({ theme }) => theme.colors.duskRed,
    borderColor: ({ theme }) => theme.colors.duskRed,
  })(props),
})

export const normalSizeStyles = createShapeStyles({
  size: 56,
  fontSize: ({ theme }) => theme.fontSizes.default,
})

export const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: combine(primaryAppearanceStyles, primaryHoverAppearanceStyles)
})

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: normalSizeStyles
})
