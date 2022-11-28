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

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  withoutPaddingMicroHeight: withoutPaddingMicroHeightStyles,
})
