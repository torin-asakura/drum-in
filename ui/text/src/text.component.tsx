import styled               from '@emotion/styled'
import { Text as BaseText } from '@atls-ui-parts/text'

import { textStyles }       from './text.styles'
import { TextProps }        from './text.interface'

const Text = styled(BaseText)<TextProps>(textStyles)

export { Text }
