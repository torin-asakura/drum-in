import { CSSObject } from '@emotion/css'
import { styleFn }   from 'styled-system'

export const baseStyles: CSSObject = {
  textDecoration: 'none',
  cursor: 'pointer',
}

export const appearanceStyles: styleFn = ({ hover }) => ({
  color: hover ? 'blue' : 'black',
})
