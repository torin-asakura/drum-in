import styled                     from '@emotion/styled'
import { space, flexbox, layout } from 'styled-system'

export const Row: any = styled('div')(flexbox, layout, space)

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}
