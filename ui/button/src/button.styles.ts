import { createBaseStyles }    from '@atls-ui-parts/button'
import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const withoutPaddingMicroHeightStyles = createShapeStyles({
  size: 'auto',
  rounding: prop('theme.radii.zero') as unknown as number,
  paddingLeft: 0,
  paddingRight: 0,
})

const mediumPaddingNormalHeightStyles = createShapeStyles({
  size: 56,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 20,
  paddingRight: 8,
})

const withoutPaddingBigHeightStyles = createShapeStyles({
  size: 68,
  rounding: prop('theme.radii.extra') as unknown as number,
  paddingLeft: 0,
  paddingRight: 0,
})

const withoutPaddingMediumHeightStyles = createShapeStyles({
  size: 40,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 0,
  paddingRight: 0,
})

const mediumPaddingBigHeightStyles = createShapeStyles({
  size: 61,
  rounding: prop('theme.radii.bigger') as unknown as number,
  paddingLeft: 32,
  paddingRight: 32,
})

const middlingPaddingNormalHeightStyles = createShapeStyles({
  size: 50,
  rounding: prop('theme.radii.max') as unknown as number,
  paddingLeft: 16,
  paddingRight: 16,
})

const massivePaddingGiantHeightStyles = createShapeStyles({
  size: 112,
  rounding: prop('theme.radii.max') as unknown as number,
  paddingLeft: 25.5,
  paddingRight: 25.5,
})

const semiMediumPaddingHugeHeightStyles = createShapeStyles({
  size: 71,
  rounding: prop('theme.radii.max') as unknown as number,
  paddingLeft: 13.5,
  paddingRight: 13.5,
})

const middlingPaddingMediumHeightStyles = createShapeStyles({
  size: 40,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 16,
  paddingRight: 16,
})

const littlePaddingSemiMediumHeightStyles = createShapeStyles({
  size: 36,
  rounding: prop('theme.radii.semiMedium') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})

const littlePaddingMediumHeightStyles = createShapeStyles({
  size: 44,
  rounding: prop('theme.radii.max') as unknown as number,
  paddingLeft: 10,
  paddingRight: 10,
})

const littlePaddingSemiRegularHeightStyles = createShapeStyles({
  size: 48,
  rounding: prop('theme.radii.max') as unknown as number,
  paddingLeft: 8,
  paddingRight: 8,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  withoutPaddingMicroHeight: withoutPaddingMicroHeightStyles,
  mediumPaddingNormalHeight: mediumPaddingNormalHeightStyles,
  withoutPaddingBigHeight: withoutPaddingBigHeightStyles,
  withoutPaddingMediumHeight: withoutPaddingMediumHeightStyles,
  mediumPaddingBigHeight: mediumPaddingBigHeightStyles,
  middlingPaddingNormalHeight: middlingPaddingNormalHeightStyles,
  middlingPaddingMediumHeight: middlingPaddingMediumHeightStyles,
  littlePaddingMediumHeight: littlePaddingMediumHeightStyles,
  littlePaddingSemiMediumHeight: littlePaddingSemiMediumHeightStyles,
  massivePaddingGiantHeight: massivePaddingGiantHeightStyles,
  semiMediumPaddingHugeHeight: semiMediumPaddingHugeHeightStyles,
  littlePaddingSemiRegularHeight: littlePaddingSemiRegularHeightStyles,
})
