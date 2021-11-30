import styled                                              from '@emotion/styled'
import { space, flexbox, layout, color, border, position } from 'styled-system'

export const Button = styled('div')(space, flexbox, layout, color, border, position, () => ({
  cursor: 'pointer',
}))
// TODO change button component
Button.defaultProps = {
  display: 'flex',
}
