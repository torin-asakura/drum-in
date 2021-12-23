import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

export const appearanceStyles = createAppearanceStyles({
  fontColor: ({ theme }) =>  theme.colors.dullRed,
  backgroundColor: ({ theme }) => theme.colors.dullRed,
  borderColor: ({ theme }) => theme.colors.dullRed,
})

