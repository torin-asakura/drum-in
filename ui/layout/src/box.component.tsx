import styled                         from '@emotion/styled'
import { space, flex, layout, color, border } from 'styled-system'

export const Box: any = styled('div')({ flex, color, space, layout,border })

Box.defaultProps = {
  display: 'flex',
  width: '100%',
}
