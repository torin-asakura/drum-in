import { CSSObject }              from '@emotion/css'
import { createBaseStyles }       from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'

export const baseStyles = createBaseStyles()

export const baseSelectStyles: CSSObject = {
  position: 'relative',
  width: '100%',
  justifyContent: 'flex-start',
}

export const appearanceStyles = createAppearanceStyles({
  fontColor: ({ theme }) =>  theme.colors.dullRed,
  backgroundColor: ({ theme }) => theme.colors.dullRed,
  borderColor: ({ theme }) => theme.colors.dullRed,
})

export const hoverAppearanceStyles = (props) => ({
  '&:hover': createAppearanceStyles({
    fontColor: ({ theme }) =>
   theme.colors.dullRed,
    backgroundColor: ({ theme }) => theme.colors.duskRed,
    borderColor: ({ theme }) => theme.colors.duskRed,
  })(props),
})

export const shapeStyles = createShapeStyles({
  size: 56,
  fontSize: ({ theme }) => theme.fontSizes.default,
  rounding: (({ theme }) => theme.radii.intermediate) as any,
  paddingLeft: 16,
  paddingRight: 16,
})