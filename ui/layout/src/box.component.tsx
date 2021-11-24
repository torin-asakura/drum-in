import styled                         from '@emotion/styled'
import { space, flexbox , layout, color, border,position } from 'styled-system'

export const Box: any = styled('div')( flexbox, color, space, layout, border, position )

Box.defaultProps = {
  display: 'flex'
}
