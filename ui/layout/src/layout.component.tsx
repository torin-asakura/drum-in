import styled                  from '@emotion/styled'
import { space, flex, layout } from 'styled-system'

export const Layout: any = styled('div')({ space, flex }, layout)

Layout.defaultProps = {
  width: '100%',
  display: 'flex',
}
