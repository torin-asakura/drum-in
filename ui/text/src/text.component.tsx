import styled                from '@emotion/styled'

import { typography, color } from 'styled-system'

import { textStyles }        from './text.styles'
import { TextProps }         from './text.interface'

//@ts-ignore
export const Text = styled.span<TextProps>(typography, color, textStyles, () => ({
  textDecoration: true,
  cursor: true,
}))
