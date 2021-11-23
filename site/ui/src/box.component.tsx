import styled                    from '@emotion/styled'
import { space, flex, layout, color } from 'styled-system'

export const Box: any = styled('div')({ flex, color, space, layout })

Box.defaultProps = {
  display: 'flex',
  width: '100%',
}
