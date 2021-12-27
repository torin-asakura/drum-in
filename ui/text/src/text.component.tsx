import styled                from '@emotion/styled'

import { typography, color } from 'styled-system'

import { textStyles }        from './text.styles'
import { TextProps }         from './text.interface'

export const Text = styled.span<TextProps>(typography, color, textStyles)
