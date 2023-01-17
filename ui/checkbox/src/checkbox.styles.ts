import { createContainerBaseStyles }     from '@atls-ui-parts/checkbox'
import { createContainerPositionStyles } from '@atls-ui-parts/checkbox'
import { createBoxBaseStyles }           from '@atls-ui-parts/checkbox'
import { createBoxShapeStyles }          from '@atls-ui-parts/checkbox'
import { createBoxAppearanceStyles }     from '@atls-ui-parts/checkbox'
import { createCheckBaseStyles }         from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }        from '@atls-ui-parts/checkbox'
import { createLabelAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createLabelShapeStyles }        from '@atls-ui-parts/checkbox'
import { createLabelPositionStyles }     from '@atls-ui-parts/checkbox'

import { styleFn }                       from 'styled-system'
import { prop }                          from 'styled-tools'
import { ifProp }                        from 'styled-tools'

import { theme }                         from '@ui/theme'

export const boxBaseStyles = createBoxBaseStyles()
export const boxShapeStyles = createBoxShapeStyles({
  size: 20,
  borderWidth: 1,
  borderRadius: theme.radii.semiMicro,
})
export const boxDefaultAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.default.border,
  backgroundColor: theme.colors.checkbox.default.background,
})
export const boxHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.hover.border,
  backgroundColor: theme.colors.checkbox.hover.background,
})
export const boxCheckedAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.checked.border,
  backgroundColor: theme.colors.checkbox.checked.background,
})
export const boxCheckedHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.checkedHover.border,
  backgroundColor: theme.colors.checkbox.checkedHover.background,
})
export const boxDisabledAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.disabled.border,
  backgroundColor: theme.colors.checkbox.disabled.background,
})
export const boxAppearanceStyles = ifProp(
  prop('disabled', false),
  boxDisabledAppearanceStyles,
  ifProp(
    prop('checked', false),
    ifProp(prop('hover', false), boxCheckedHoverAppearanceStyles, boxCheckedAppearanceStyles),
    ifProp(prop('hover', false), boxHoverAppearanceStyles, boxDefaultAppearanceStyles)
  )
)

export const containerBaseStyles = createContainerBaseStyles()
export const containerPositionStyles = createContainerPositionStyles()
export const containerFillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

export const labelShapeStyles = createLabelShapeStyles({
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.medium,
})

export const labelMobileShapeStyles = createLabelShapeStyles({
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.semiMicro,
})
export const labelAppearanceStyles = createLabelAppearanceStyles({
  fontColor: theme.colors.text.gray,
})
export const labelPositionStyles = createLabelPositionStyles({
  margin: '10px',
})

export const checkmarkBaseStyles = createCheckBaseStyles()
export const checkmarkAppearanceStyles = createCheckAppearanceStyles({
  color: theme.colors.checkbox.checked.checkmark,
})
export const checkmarkShapeStyles = createCheckShapeStyles({
  size: 14,
})
export const checkmarkCheckStyles = ifProp(
  'checked',
  {
    display: 'flex',
  },
  { display: 'none' }
)
