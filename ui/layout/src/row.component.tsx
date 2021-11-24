import styled                  from '@emotion/styled'
import { space, flex, layout } from 'styled-system'

export const Row: any = styled('div')({ flex, layout, space })

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}
