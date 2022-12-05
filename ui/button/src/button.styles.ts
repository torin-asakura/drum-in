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

const giantPaddingBigHeightStyles = createShapeStyles({
  size: 68,
  rounding: prop('theme.radii.extra') as unknown as number,
  paddingLeft: 0,
  paddingRight: 0,
})

const hugePaddingMediumHeightStyles = createShapeStyles({
  size: 40,
  rounding: prop('theme.radii.medium') as unknown as number,
  paddingLeft: 99,
  paddingRight: 99,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  withoutPaddingMicroHeight: withoutPaddingMicroHeightStyles,
  mediumPaddingNormalHeight: mediumPaddingNormalHeightStyles,
  giantPaddingBigHeight: giantPaddingBigHeightStyles,
  hugePaddingMediumHeight: hugePaddingMediumHeightStyles,
})
