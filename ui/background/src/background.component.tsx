import styled         from '@emotion/styled'

import { background } from 'styled-system'
import { flex }       from 'styled-system'
import { layout }     from 'styled-system'
import { position }   from 'styled-system'
import { border }     from 'styled-system'
import { flexbox }    from 'styled-system'

const Background = styled.div(
  ({ theme, gradient }) => ({
    background: gradient ? theme.backgrounds[gradient] : 'none',
  }),
  background,
  layout,
  position,
  border,
  flexbox
)
export { Background }
