import styled                  from '@emotion/styled'
import { space, flexbox , layout } from 'styled-system'

export const Column = styled('div')( layout, flexbox , space )

Column.defaultProps = {
    display: 'flex',
    flexDirection:'column',
    height: '100%'
  }
