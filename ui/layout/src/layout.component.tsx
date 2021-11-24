import styled                     from '@emotion/styled'
import { space, flexbox, layout } from 'styled-system'

export const Layout: any = styled('div')(space, flexbox, layout)

Layout.defaultProps = {
  display: 'flex',
}
